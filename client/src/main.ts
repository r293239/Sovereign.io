import { GameRenderer } from './game/GameRenderer.js';
import { GameLogic } from './game/GameLogic.js';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const renderer = new GameRenderer(canvas);
const gameLogic = new GameLogic();

// Temporary test data
const testPlayer = {
  id: '1',
  name: 'Player1',
  color: '#3498db',
  resources: { gold: 1000, manpower: 500, materials: 300, energy: 200 },
  territories: [],
  armies: [],
  buildings: [],
  research: [],
  allies: []
};

function gameLoop() {
  gameLogic.update(16.67); // ~60 FPS
  renderer.render([testPlayer], []);
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
