'use client';

import React from 'react';
import Link from 'next/link';
import { ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

interface CategoryListItemProps {
  category: string;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link href={`/category/${category}`} passHref legacyBehavior>
        <ListItem button component="a">
          <ListItemText primary={category} />
        </ListItem>
      </Link>
    </motion.div>
  );
};

export default CategoryListItem;