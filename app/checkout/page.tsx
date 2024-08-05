'use client';

import React, { useEffect } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, loadCart } = useCart();

  useEffect(() => {
    loadCart();
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={`Quantity: ${item.quantity} | Price: $${item.price * item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth>
                Proceed to Payment
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link href="/" passHref>
                <Button variant="outlined" color="secondary" fullWidth component="a">
                  Continue Shopping
                </Button>
              </Link>
            </Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
}