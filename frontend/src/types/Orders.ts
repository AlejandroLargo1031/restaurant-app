export interface Orders {
    id: number;
    total: number;
    created_at: string;
    products: {
      id: number;
      name: string;
      price: string;
    }[];
  }
  