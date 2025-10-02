const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Draw something to prove it's working
ctx.fillStyle = '#3498db';
ctx.font = '24px Arial';
ctx.fillText('Sovereign.io - Game Loading...', 50, 50);

ctx.fillStyle = '#2ecc71';
for (let i = 0; i < 20; i++) {
    ctx.fillRect(Math.random() * 700, 100 + Math.random() * 400, 4, 4);
}

console.log('Sovereign.io client loaded!');
