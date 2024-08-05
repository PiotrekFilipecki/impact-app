'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion, useAnimate } from 'framer-motion';
import { Product } from '../types';
import AddToCartButton from './AddToCartButton';
import { useSearchParams } from 'next/navigation';

interface ProductListProps {
  initialProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ initialProducts }) => {
  const [scope, animate] = useAnimate();
  const [products, setProducts] = useState(initialProducts);
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  useEffect(() => {
    const filteredProducts = currentCategory
      ? initialProducts.filter(product => product.category === currentCategory)
      : initialProducts;
    setProducts(filteredProducts);
    
    // Animate the list when products change
    animate(scope.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5 });
  }, [currentCategory, initialProducts, animate, scope]);

  return (
    <Grid container spacing={3} ref={scope}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{ height: '100%' }}
          >
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Link href={`/product/${product.id}`} passHref style={{ flexGrow: 1, display: 'flex' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ 
                      objectFit: 'contain',
                      cursor: 'pointer',
                      maxHeight: 200,
                      width: '100%',
                      flexGrow: 1
                    }}
                  />
                </Link>
                <CardContent sx={{ flexGrow: 0 }}>
                  <Typography gutterBottom variant="h6" component="div" noWrap>
                    <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {product.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ p: 2 }}>
                <AddToCartButton product={product} />
              </Box>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;