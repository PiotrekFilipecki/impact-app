'use client';

import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </motion.div>
  );
};

export default AddToCartButton;