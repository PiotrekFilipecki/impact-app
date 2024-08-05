'use client';

import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <CircularProgress size={60} />
    </Box>
  </motion.div>
);

export default Loader;