"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.updateVehicle = exports.addVehicle = exports.getVehicleById = exports.getAllVehicles = void 0;
// Database in-memory sederhana
let vehicles = [
    {
        id: '1',
        brand: 'Toyota',
        model: 'Avanza',
        year: 2022,
        color: 'Silver',
        type: 'car'
    },
    {
        id: '2',
        brand: 'Honda',
        model: 'CBR250RR',
        year: 2021,
        color: 'Red',
        type: 'motorcycle'
    }
];
// Fungsi untuk mendapatkan semua kendaraan
const getAllVehicles = () => {
    return vehicles;
};
exports.getAllVehicles = getAllVehicles;
// Fungsi untuk mendapatkan kendaraan by ID
const getVehicleById = (id) => {
    return vehicles.find(vehicle => vehicle.id === id);
};
exports.getVehicleById = getVehicleById;
// Fungsi untuk menambahkan kendaraan baru
const addVehicle = (newVehicle) => {
    const vehicle = Object.assign({ id: (vehicles.length + 1).toString() }, newVehicle);
    vehicles.push(vehicle);
    return vehicle;
};
exports.addVehicle = addVehicle;
// Fungsi untuk mengupdate kendaraan (nilai plus)
const updateVehicle = (id, updatedVehicle) => {
    const index = vehicles.findIndex(vehicle => vehicle.id === id);
    if (index === -1)
        return null;
    vehicles[index] = Object.assign(Object.assign({}, vehicles[index]), updatedVehicle);
    return vehicles[index];
};
exports.updateVehicle = updateVehicle;
// Fungsi untuk menghapus kendaraan (nilai plus)
const deleteVehicle = (id) => {
    const initialLength = vehicles.length;
    vehicles = vehicles.filter(vehicle => vehicle.id !== id);
    return vehicles.length !== initialLength;
};
exports.deleteVehicle = deleteVehicle;
