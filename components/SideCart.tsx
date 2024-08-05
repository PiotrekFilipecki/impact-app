'use client';

import React from 'react';
import Link from 'next/link';
import { Drawer, List, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideCart: React.FC<SideCartProps> = ({ isOpen, onClose }) => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: '300px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <AnimatePresence>
          {cart.length === 0 ? (
            <Typography>Your cart is empty</Typography>
          ) : (
            <>
              <List>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </List>
              <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/checkout" passHref>
                  <Button variant="contained" color="primary" fullWidth onClick={onClose}>
                    Proceed to Checkout
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Drawer>
  );
};

export default SideCart;