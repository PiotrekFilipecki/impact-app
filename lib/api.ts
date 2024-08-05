import { Product } from '../types';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/products/categories`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  
  return res.json();
}

export async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products/category/${categoryId}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return res.json();
}