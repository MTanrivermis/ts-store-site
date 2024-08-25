export type EventFunc= (e:React.ChangeEvent<HTMLInputElement>) => void;

export interface Products {
    products: Product[];
    total: number;
    skip: number; 
    limit: number;
}

export interface Product {
    id:                 number;
    title:              string;
    category:           string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    thumbnail:          string;
    images:             string[];
}

export type VoidFunc = (product: Product) => void;