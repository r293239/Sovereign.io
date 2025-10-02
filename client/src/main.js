import { GameRenderer } from './game/GameRenderer.js';

const canvas = document.getElementById('gameCanvas');
const renderer = new GameRenderer(canvas);

// Test data
const testTerritories = [];
for (let x = 0; x < 50; x++) {
  for (let y = 0; y < 50; y++) {
    testTerritories.push({
      id: `${x}-${y}`,
      x, y,
      ownerId: Math.random() > 0.9 ? 'player1' : null
    });
  }
}

function gameLoop() {
  renderer.render([], testTerritories);
  requestAnimationFrame(gameLoop);
}

// Start
gameLoop();
console.log('Sovereign.io client running!');
