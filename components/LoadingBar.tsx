'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LoadingBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleStart();
    handleComplete();
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <motion.div
    className='loadingBar'
      initial={{ opacity: 0, width: '0%' }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '30px',
        background: 'linear-gradient(to right, #4a90e2, #63b3ed)',
        zIndex: 9999,
      }}
    />
  );
}