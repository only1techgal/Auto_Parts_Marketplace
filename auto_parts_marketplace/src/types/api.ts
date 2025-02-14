export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  export interface Part {
    id: string;
    title: string;
    description: string;
    price: number;
    condition: 'new' | 'used' | 'refurbished';
    category: string;
    images: string[];
    sellerId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    listings: Part[];
  }
  