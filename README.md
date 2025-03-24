# 🚗 Vehicle Management System (VMS)

## 📋 Project Overview

A lightweight RESTful API for Vehicle Data Management built with Express.js and TypeScript.
Supports full CRUD operations with JSON responses.

## ✨ Key Features

```
┌─────────────────────────────────────────┐
│ ✓ Add new vehicles                      │
│ ✓ Retrieve vehicles (all or by ID)      │
│ ✓ Update existing vehicle details       │
│ ✓ Delete vehicles                       │
│ ✓ Built with TypeScript for type safety │
│ ✓ Simple in-memory database             │
└─────────────────────────────────────────┘
```

## 🚀 Setup & Installation

### Prerequisites

```
➜ Node.js (v16+)
➜ npm or Yarn 
➜ TypeScript (global): npm install -g typescript
```

### Installation

```bash
# Clone the repository
$ git clone https://github.com/Razaaaaa27/Vehicle-Management-System
$ cd vehicle-management-system

# Install dependencies
$ npm install

# Run development server
$ npm run dev
# API runs at http://localhost:3000

# Build for production
$ npm run build
$ npm start
```

## 🔌 API Endpoints

```
┌─────────────┬──────────────────┬─────────────────────────┐
│ METHOD      │ ENDPOINT         │ DESCRIPTION             │
├─────────────┼──────────────────┼─────────────────────────┤
│ GET         │ /vehicles        │ Fetch all vehicles      │
│ GET         │ /vehicles/:id    │ Fetch a vehicle by ID   │
│ POST        │ /vehicles        │ Add a new vehicle       │
│ PUT         │ /vehicles/:id    │ Update a vehicle by ID  │
│ DELETE      │ /vehicles/:id    │ Delete a vehicle by ID  │
└─────────────┴──────────────────┴─────────────────────────┘
```

### Example Request Bodies

```json
// POST /vehicles
{
  "brand": "Toyota", 
  "model": "Avanza", 
  "year": 2023, 
  "type": "car"
}

// PUT /vehicles/:id
{
  "model": "Avanza X"
}
```

## 📝 Example API Requests

### 1. Get All Vehicles

```bash
$ curl http://localhost:3000/vehicles

# Response:
{
  "data": [
    {
      "id": "1",
      "brand": "Toyota",
      "model": "Avanza",
      "year": 2022,
      "color": "Silver",
      "type": "car"
    }
  ]
}
```

### 2. Add a New Vehicle

```bash
$ curl -X POST -H "Content-Type: application/json" \
  -d '{"brand": "Honda", "model": "Civic", "year": 2023, "type": "car"}' \
  http://localhost:3000/vehicles

# Response:
{
  "data": {
    "id": "2",
    "brand": "Honda",
    "model": "Civic",
    "year": 2023,
    "type": "car"
  }
}
```

### 3. Update a Vehicle

```bash
$ curl -X PUT -H "Content-Type: application/json" \
  -d '{"color": "Red"}' \
  http://localhost:3000/vehicles/1

# Response:
{
  "data": {
    "id": "1",
    "brand": "Toyota",
    "model": "Avanza",
    "year": 2022,
    "color": "Red",
    "type": "car"
  }
}
```

### 4. Delete a Vehicle

```bash
$ curl -X DELETE http://localhost:3000/vehicles/1

# Response:
{
  "message": "Vehicle deleted successfully"
}
```

## 🛠️ Development

### Project Structure

```
vehicle-management-system/
├── src/
│   ├── app.ts            # Main Express app
│   ├── routes/
│   │   └── vehicles.ts   # Vehicle endpoints
│   ├── models/
│   │   └── vehicle.ts    # Vehicle data model
│   └── database.ts       # In-memory database
├── package.json          # Dependencies & scripts
└── tsconfig.json         # TypeScript config
```

### Available Scripts

```
npm run dev    # Start dev server (auto-reload)
npm run build  # Compile TypeScript
npm start      # Run production build
npm test       # (Future: Add tests)
```

## 🏁 Get Started

```bash
git clone https://github.com/Razaaaaa27/Vehicle-Management-System
cd vehicle-management-system
npm install
npm run dev


