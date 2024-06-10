export interface Product {
  id: number;
  name: string;
  color: string;
  colorsavailable: string[];
  price: string;
  priceActual: string;
  fullPrice: string;
  brand: string;
  categoryId: number;
  description: { title: string; text: string[] }[];
  screen: string;
  processor: string;
  ram: string;
  year: string;
  cells: string[];
  images: string[];
  capacitiesavailable: string[];
  camera: string | null;
  zoom: string | null;
  connection: string | null,
  type: string | null,
  format: string | null,
  resolution: string | null,
  priceRegular: string | null,
  namespaceId: string
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface IPhone extends Product {
  camera: string;
  zoom: string;
}

export interface IPad extends Product {
  camera: string;
  zoom: string;
}

export interface AppleWatch extends Product {
  camera: string | null;
  zoom: string | null;
}
