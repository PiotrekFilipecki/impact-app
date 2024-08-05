import React from 'react';
import { Typography } from '@mui/material';
import ProductList from '../../../components/ProductList';
import { fetchProductsByCategory } from '../../../lib/api';
import CartLoader from '../../../components/CartLoader';

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const category = params.id;
  const products = await fetchProductsByCategory(category);

  return (
    <div>
      <CartLoader />
      <Typography variant="h4" component="h1" gutterBottom>
        {category} ({products.length} products)
      </Typography>
      <ProductList initialProducts={products} />
    </div>
  );
}