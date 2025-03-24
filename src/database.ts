import { Vehicle } from './models/vehicle';

// Database in-memory sederhana
let vehicles: Vehicle[] = [
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
export const getAllVehicles = (): Vehicle[] => {
  return vehicles;
};

// Fungsi untuk mendapatkan kendaraan by ID
export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

// Fungsi untuk menambahkan kendaraan baru
export const addVehicle = (newVehicle: Omit<Vehicle, 'id'>): Vehicle => {
  const vehicle: Vehicle = {
    id: (vehicles.length + 1).toString(),
    ...newVehicle
  };
  vehicles.push(vehicle);
  return vehicle;
};

// Fungsi untuk mengupdate kendaraan (nilai plus)
export const updateVehicle = (id: string, updatedVehicle: Partial<Vehicle>): Vehicle | null => {
  const index = vehicles.findIndex(vehicle => vehicle.id === id);
  if (index === -1) return null;
  
  vehicles[index] = { ...vehicles[index], ...updatedVehicle };
  return vehicles[index];
};

// Fungsi untuk menghapus kendaraan (nilai plus)
export const deleteVehicle = (id: string): boolean => {
  const initialLength = vehicles.length;
  vehicles = vehicles.filter(vehicle => vehicle.id !== id);
  return vehicles.length !== initialLength;
};