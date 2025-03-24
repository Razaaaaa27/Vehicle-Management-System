import express from 'express';
import cors from 'cors';
import vehiclesRouter from './routes/vehicles';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/vehicles', vehiclesRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API Data Kendaraan - Project PPL');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});