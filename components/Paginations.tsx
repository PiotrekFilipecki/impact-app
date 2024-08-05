'use client';

import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';
import { useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, category }) => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', value.toString());
    if (category !== 'All') {
      searchParams.set('category', category);
    }
    router.push(`/?${searchParams.toString()}`);
  };

  return (
    <MUIPagination 
      count={totalPages} 
      page={currentPage} 
      onChange={handleChange} 
      color="primary" 
      size="large"
      sx={{ marginY: 4, display: 'flex', justifyContent: 'center' }}
    />
  );
};

export default Pagination;