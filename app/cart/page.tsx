'use client';

import React from 'react';
import { Typography, List, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CartItem from '../../components/CartItem';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <AnimatePresence>
            <List>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </List>
          </AnimatePresence>
          <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
}