import React, { Suspense } from 'react';
import { Typography } from '@mui/material';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import { fetchAllProducts, fetchCategories } from '../lib/api';
import CartLoader from '../components/CartLoader';
import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <CartLoader />
      <Typography variant="h4" component="h1" gutterBottom>
        All Products
      </Typography>
      <Suspense fallback={<Loader />}>
        <ProductsAndCategories />
      </Suspense>
    </div>
  );
}

async function ProductsAndCategories() {
  const productsPromise = fetchAllProducts();
  const categoriesPromise = fetchCategories();
  
  const [products, categories] = await Promise.all([productsPromise, categoriesPromise]);

  return (
    <>
      <CategoryFilter categories={categories} />
      <ProductList initialProducts={products} />
    </>
  );
}