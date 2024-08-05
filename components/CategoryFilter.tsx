'use client';

import React from 'react';
import { Chip, Box } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterProps {
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryClick = (category: string) => {
    if (category === currentCategory) {
      router.push('/');
    } else {
      router.push(`/?category=${category}`);
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => handleCategoryClick(category)}
          color={currentCategory === category ? 'primary' : 'default'}
        />
      ))}
    </Box>
  );
};

export default CategoryFilter;