'use client';

import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function CartLoader() {
  const { loadCart } = useCart();

  useEffect(() => {
    loadCart();
  }, []);

  return null;
}