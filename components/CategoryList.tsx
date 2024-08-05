// import React from 'react';
// import Link from 'next/link';
// import { List, ListItem, ListItemText } from '@mui/material';
// import { motion } from 'framer-motion';
// import CategoryListItem from './CategoryListItem';

// interface CategoryListProps {
//   categories: string[];
// }

// const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
//   return (
//     <List>
//       {categories.map((category) => (
//         <CategoryListItem key={category} category={category} />
//       ))}
//     </List>
//   );
// };

// export default CategoryList;

'use client';

import React from 'react';
import { Chip, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

interface CategoryFilterProps {
  categories: string[];
  currentCategory: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, currentCategory }) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    searchParams.delete('page');
    router.push(`/?${searchParams.toString()}`);
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