import React from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { fetchProductById } from '../../../lib/api';
import AddToCartButton from '../../../components/AddToCartButton';
import CartLoader from '../../../components/CartLoader';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProductById(parseInt(params.id));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
      {/* <CartLoader /> */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>{product.title}</Typography>
          <Typography variant="h6" gutterBottom>Price: ${product.price}</Typography>
          <Typography variant="body1" paragraph>{product.description}</Typography>
          <AddToCartButton product={product} />
        </Grid>
      </Grid>
    </Paper>
  );
}