"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const router = express_1.default.Router();
// GET semua kendaraan
router.get('/', (req, res) => {
    const vehicles = (0, database_1.getAllVehicles)();
    res.json({ data: vehicles });
});
// GET kendaraan by ID
router.get('/:id', (req, res) => {
    const vehicle = (0, database_1.getVehicleById)(req.params.id);
    if (vehicle) {
        res.json({ data: vehicle });
    }
    else {
        res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
    }
});
// POST menambahkan kendaraan baru
router.post('/', (req, res) => {
    try {
        const newVehicle = req.body;
        // Validasi sederhana
        if (!newVehicle.brand || !newVehicle.model || !newVehicle.year || !newVehicle.type) {
            return res.status(400).json({ message: 'Data brand, model, year, dan type harus diisi' });
        }
        const createdVehicle = (0, database_1.addVehicle)(newVehicle);
        res.status(201).json({ data: createdVehicle });
    }
    catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});
// PUT mengupdate kendaraan (nilai plus)
router.put('/:id', (req, res) => {
    const updatedVehicle = (0, database_1.updateVehicle)(req.params.id, req.body);
    if (updatedVehicle) {
        res.json({ data: updatedVehicle });
    }
    else {
        res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
    }
});
// DELETE menghapus kendaraan (nilai plus)
router.delete('/:id', (req, res) => {
    const isDeleted = (0, database_1.deleteVehicle)(req.params.id);
    if (isDeleted) {
        res.json({ message: 'Kendaraan berhasil dihapus' });
    }
    else {
        res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
    }
});
exports.default = router;
