'use client';
import React from 'react';
import { ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      <ListItem>
        <ListItemText
          primary={item.title}
          secondary={`Price: $${item.price} | Total: $${item.price * item.quantity}`}
        />
        <TextField
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          inputProps={{ min: 1 }}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
        </motion.div>
      </ListItem>
    </motion.div>
  );
};

export default CartItem;