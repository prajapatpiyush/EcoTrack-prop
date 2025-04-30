import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppHeader from './AppHeader';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <CssBaseline />
      <AppHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
