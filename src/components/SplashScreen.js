import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { Recycling } from '@mui/icons-material';

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 1.5s infinite ease-in-out',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(1)',
            },
            '50%': {
              transform: 'scale(1.05)',
            },
            '100%': {
              transform: 'scale(1)',
            },
          },
        }}
      >
        <Recycling
          sx={{
            fontSize: 80,
            color: theme.palette.primary.main,
            mb: 2,
          }}
        />
        <Typography
          variant="h4"
          component="h1"
          color="primary"
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          EcoTrack
        </Typography>
      </Box>
      <CircularProgress
        size={40}
        thickness={4}
        sx={{
          color: theme.palette.primary.main,
        }}
      />
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ mt: 2 }}
      >
        Loading a greener future...
      </Typography>
    </Box>
  );
};

export default SplashScreen;
