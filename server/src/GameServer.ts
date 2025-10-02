import { Server, Socket } from 'socket.io';
import { Player, Territory } from '../../shared/types/game.js';

export class GameServer {
  private io: Server;
  private players: Map<string, Player> = new Map();
  private territories: Territory[] = [];

  constructor(io: Server) {
    this.io = io;
    this.setupSocketHandlers();
    this.initializeGame();
  }

  private setupSocketHandlers() {
    this.io.on('connection', (socket: Socket) => {
      console.log('Player connected:', socket.id);

      socket.on('joinGame', (playerName: string) => {
        this.handlePlayerJoin(socket, playerName);
      });

      socket.on('moveArmy', (data: { armyId: string; x: number; y: number }) => {
        this.handleArmyMove(socket, data);
      });

      socket.on('build', (data: { territoryId: string; buildingType: string }) => {
        this.handleBuild(socket, data);
      });

      socket.on('research', (data: { researchType: string }) => {
        this.handleResearch(socket, data);
      });

      socket.on('disconnect', () => {
        this.handlePlayerDisconnect(socket);
      });
    });
  }

  private handlePlayerJoin(socket: Socket, playerName: string) {
    const player: Player = {
      id: socket.id,
      name: playerName,
      color: this.generateRandomColor(),
      resources: { gold: 1000, manpower: 500, materials: 300, energy: 200 },
      territories: [],
      armies: [],
      buildings: [],
      research: [],
      allies: []
    };

    this.players.set(socket.id, player);
    socket.emit('gameState', this.getGameState());
  }

  private handleArmyMove(socket: Socket, data: any) {
    // Implement army movement logic
    this.io.emit('armyMoved', data);
  }

  private handleBuild(socket: Socket, data: any) {
    // Implement building logic
    this.io.emit('buildingConstructed', data);
  }

  private handleResearch(socket: Socket, data: any) {
    // Implement research logic
    this.io.emit('researchStarted', data);
  }

  private handlePlayerDisconnect(socket: Socket) {
    this.players.delete(socket.id);
    console.log('Player disconnected:', socket.id);
  }

  private initializeGame() {
    // Generate game map
    this.territories = this.generateTerritories(200, 200);
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

  private getGameState() {
    return {
      players: Array.from(this.players.values()),
      territories: this.territories
    };
  }

  private generateRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
