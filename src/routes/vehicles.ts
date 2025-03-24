import express from 'express';
import { 
  getAllVehicles, 
  getVehicleById, 
  addVehicle, 
  updateVehicle,
  deleteVehicle
} from '../database';
import { Vehicle } from '../models/vehicle';

const router = express.Router();

// GET semua kendaraan
router.get('/', (req, res) => {
  const vehicles = getAllVehicles();
  res.json({ data: vehicles });
});

// GET kendaraan by ID
router.get('/:id', (req, res) => {
  const vehicle = getVehicleById(req.params.id);
  if (vehicle) {
    res.json({ data: vehicle });
  } else {
    res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
  }
});

// POST menambahkan kendaraan baru
router.post('/', (req, res) => {
  try {
    const newVehicle: Omit<Vehicle, 'id'> = req.body;
    
    // Validasi sederhana
    if (!newVehicle.brand || !newVehicle.model || !newVehicle.year || !newVehicle.type) {
      return res.status(400).json({ message: 'Data brand, model, year, dan type harus diisi' });
    }
    
    const createdVehicle = addVehicle(newVehicle);
    res.status(201).json({ data: createdVehicle });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// PUT mengupdate kendaraan (nilai plus)
router.put('/:id', (req, res) => {
  const updatedVehicle = updateVehicle(req.params.id, req.body);
  if (updatedVehicle) {
    res.json({ data: updatedVehicle });
  } else {
    res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
  }
});

// DELETE menghapus kendaraan (nilai plus)
router.delete('/:id', (req, res) => {
  const isDeleted = deleteVehicle(req.params.id);
  if (isDeleted) {
    res.json({ message: 'Kendaraan berhasil dihapus' });
  } else {
    res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
  }
});

export default router;