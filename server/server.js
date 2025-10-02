import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.static('../client'));

app.listen(PORT, () => {
  console.log(`Sovereign.io server running on http://localhost:${PORT}`);
});
