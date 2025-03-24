export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    year: number;
    color?: string; // Optional property
    type: 'car' | 'motorcycle' | 'truck' | 'bus';
  }