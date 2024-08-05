'use client';

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import SideCart from './SideCart';

const Header: React.FC = () => {
  const { cart, isCartOpen, openCart, closeCart } = useCart();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              E-Commerce Store
            </Link>
          </Typography>
          <IconButton color="inherit" onClick={openCart}>
            <ShoppingCartIcon />
            <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideCart isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

export default Header;