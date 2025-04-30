import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useColorMode } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton
        onClick={toggleColorMode}
        color="inherit"
        aria-label="toggle dark mode"
        sx={{
          ml: 1,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'rotate(30deg)',
          },
        }}
      >
        {mode === 'dark' ? (
          <Brightness7 sx={{ color: theme.palette.primary.light }} />
        ) : (
          <Brightness4 sx={{ color: theme.palette.primary.main }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
