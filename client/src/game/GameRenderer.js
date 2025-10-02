export class GameRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.pixelSize = 4;
  }

  render(players, territories) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderTerritories(territories);
    this.renderUI();
  }

  renderTerritories(territories) {
    territories.forEach(territory => {
      if (territory.ownerId) {
        this.ctx.fillStyle = territory.ownerId === 'player1' ? '#3498db' : '#e74c3c';
        this.ctx.fillRect(
          territory.x * this.pixelSize, 
          territory.y * this.pixelSize, 
          this.pixelSize, 
          this.pixelSize
        );
      }
    });
  }

  renderUI() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    this.ctx.fillRect(10, 10, 200, 100);
    
    this.ctx.fillStyle = 'white';
    this.ctx.font = '14px Arial';
    this.ctx.fillText('Sovereign.io - Use armies to claim land!', 20, 30);
    this.ctx.fillText('Click and drag to deploy troops', 20, 50);
    this.ctx.fillText('WASD to move camera', 20, 70);
  }
}
