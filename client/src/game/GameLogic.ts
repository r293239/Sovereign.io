import { Player, Territory, Army, Building, BUILDING_DATA, RESEARCH_DATA } from '../../../shared/types/game.js';

export class GameLogic {
  private gameState: {
    players: Player[];
    territories: Territory[];
  };

  constructor() {
    this.gameState = {
      players: [],
      territories: this.generateTerritories(100, 100) // 100x100 map
    };
  }

  update(deltaTime: number) {
    this.updateResources();
    this.updateArmies();
    this.updateResearch();
  }

  private updateResources() {
    this.gameState.players.forEach(player => {
      player.territories.forEach(territory => {
        if (territory.building) {
          const buildingData = BUILDING_DATA[territory.building.type];
          Object.entries(buildingData.production).forEach(([resource, amount]) => {
            player.resources[resource as keyof Player['resources']] += amount!;
          });
        }
      });
    });
  }

  private updateArmies() {
    this.gameState.players.forEach(player => {
      player.armies.forEach(army => {
        if (army.destination) {
          // Move army toward destination
          const dx = army.destination.x - army.position.x;
          const dy = army.destination.y - army.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 0.1) {
            // Army reached destination - claim territory or attack
            this.handleArmyArrival(army);
          } else {
            army.position.x += (dx / distance) * 0.1;
            army.position.y += (dy / distance) * 0.1;
          }
        }
      });
    });
  }

  private handleArmyArrival(army: Army) {
    const targetTerritory = this.findTerritoryAt(army.position.x, army.position.y);
    if (targetTerritory) {
      if (targetTerritory.ownerId === null) {
        // Claim neutral territory
        targetTerritory.ownerId = army.playerId;
        targetTerritory.armyGarrison = army.size;
      } else if (targetTerritory.ownerId !== army.playerId) {
        // Combat!
        this.resolveCombat(army, targetTerritory);
      }
    }
    army.destination = null;
  }

  private resolveCombat(attacker: Army, defenderTerritory: Territory) {
    // Simple combat resolution
    const defender = this.gameState.players.find(p => p.id === defenderTerritory.ownerId);
    if (defender) {
      const attackPower = attacker.size;
      const defensePower = defenderTerritory.armyGarrison;
      
      if (attackPower > defensePower) {
        // Attacker wins
        defenderTerritory.ownerId = attacker.playerId;
        defenderTerritory.armyGarrison = attacker.size - defensePower;
        attacker.size = 0; // Army is consumed
      } else {
        // Defender wins
        defenderTerritory.armyGarrison -= attackPower;
        attacker.size = 0;
      }
    }
  }

  private updateResearch() {
    // Research progress updates
    this.gameState.players.forEach(player => {
      player.research.forEach(research => {
        if (research.progress < 100) {
          research.progress += 0.1; // Progress research
        }
      });
    });
  }

  private generateTerritories(width: number, height: number): Territory[] {
    const territories: Territory[] = [];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        territories.push({
          id: `${x}-${y}`,
          x,
          y,
          ownerId: null,
          armyGarrison: 0,
          building: null
        });
      }
    }
    return territories;
  }

  private findTerritoryAt(x: number, y: number): Territory | undefined {
    return this.gameState.territories.find(t => t.x === Math.floor(x) && t.y === Math.floor(y));
  }
}
