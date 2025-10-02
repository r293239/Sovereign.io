import { Player, Territory, Army, BuildingType } from '../../../shared/types/game.js';

export class GameRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private pixelSize = 4;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
  }

  render(players: Player[], territories: Territory[]) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderTerritories(territories);
    this.renderArmies(players);
    this.renderUI(players[0]); // Render current player's UI
  }

  private renderTerritories(territories: Territory[]) {
    territories.forEach(territory => {
      if (territory.ownerId) {
        const player = this.getPlayerById(territory.ownerId);
        if (player) {
          this.ctx.fillStyle = player.color;
          this.ctx.fillRect(territory.x * this.pixelSize, territory.y * this.pixelSize, this.pixelSize, this.pixelSize);
        }
      }
    });
  }

  private renderArmies(players: Player[]) {
    players.forEach(player => {
      player.armies.forEach(army => {
        this.ctx.fillStyle = player.color;
        this.ctx.beginPath();
        this.ctx.arc(
          army.position.x * this.pixelSize,
          army.position.y * this.pixelSize,
          Math.max(2, army.size / 10),
          0,
          2 * Math.PI
        );
        this.ctx.fill();
      });
    });
  }

  private renderUI(player: Player) {
    // Render resource panel
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    this.ctx.fillRect(10, 10, 200, 120);
    
    this.ctx.fillStyle = 'white';
    this.ctx.font = '12px Arial';
    this.ctx.fillText(`Gold: ${player.resources.gold}`, 20, 30);
    this.ctx.fillText(`Manpower: ${player.resources.manpower}`, 20, 50);
    this.ctx.fillText(`Materials: ${player.resources.materials}`, 20, 70);
    this.ctx.fillText(`Energy: ${player.resources.energy}`, 20, 90);
    this.ctx.fillText(`Territories: ${player.territories.length}`, 20, 110);
  }

  private getPlayerById(id: string): Player | null {
    // This would be implemented to get player from game state
    return null;
  }
}
