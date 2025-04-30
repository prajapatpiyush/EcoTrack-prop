import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create a context for the theme mode
const ColorModeContext = createContext({ 
  toggleColorMode: () => {},
  mode: 'light'
});

// Custom hook to use the theme context
export const useColorMode = () => useContext(ColorModeContext);

// Theme provider component
export const ThemeContextProvider = ({ children }) => {
  // Get the user's preference from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  // Update localStorage when mode changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Toggle between light and dark mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  // Create the theme based on the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#4CAF50', // Eco Green
            light: '#A5D6A7', // Light Green
            dark: '#388E3C',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#A5D6A7', // Light Green
            light: '#C8E6C9',
            dark: '#81C784',
            contrastText: mode === 'dark' ? '#FFFFFF' : '#000000',
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#FFFFFF',
            paper: mode === 'dark' ? '#1E1E1E' : '#F5F5F5', // Neutral Gray
          },
          text: {
            primary: mode === 'dark' ? '#FFFFFF' : '#212121',
            secondary: mode === 'dark' ? '#AAAAAA' : '#757575',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 500,
            fontSize: '2.5rem',
            lineHeight: 1.2,
          },
          h2: {
            fontWeight: 500,
            fontSize: '2rem',
            lineHeight: 1.2,
          },
          h3: {
            fontWeight: 500,
            fontSize: '1.75rem',
            lineHeight: 1.2,
          },
          h4: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.2,
          },
          h5: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.2,
          },
          h6: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.2,
          },
          subtitle1: {
            fontSize: '1rem',
            lineHeight: 1.5,
          },
          subtitle2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
          },
          body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
          },
          body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
          },
          button: {
            textTransform: 'none',
            fontWeight: 500,
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: '8px 16px',
              },
              contained: {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                marginBottom: 16,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                transition: 'all 0.3s ease-in-out',
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                scrollBehavior: 'smooth',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeContextProvider;
