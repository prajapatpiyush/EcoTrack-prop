import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
  Avatar
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  EventNote as ScheduleIcon,
  Dashboard as DashboardIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
  Recycling as RecyclingIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const AppHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Schedule', icon: <ScheduleIcon />, path: '/schedule' },
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'How It Works', icon: <InfoIcon />, path: '/how-it-works' },
    { text: 'Contact', icon: <ContactIcon />, path: '/contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#333333',
        color: '#ffffff',
        height: '100%'
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <Box sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#3a3a3a' : '#444444'}`
      }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.light }}>
          EcoTrack
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemIcon sx={{ color: theme.palette.primary.light }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ color: '#ffffff' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '50%',
                width: 40,
                height: 40,
                mr: 1.5,
                boxShadow: '0 2px 10px rgba(76, 175, 80, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                }
              }}
            >
              <RecyclingIcon
                sx={{
                  color: 'white',
                  fontSize: 24,
                  animation: 'spin 20s linear infinite',
                  '@keyframes spin': {
                    '0%': {
                      transform: 'rotate(0deg)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  },
                }}
              />
            </Box>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 1px 1px rgba(0,0,0,0.05)',
              }}
            >
              EcoTrack
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    mx: 1,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    color: theme.palette.text.primary,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(76, 175, 80, 0.1)'
                        : 'rgba(76, 175, 80, 0.05)',
                      '&::after': {
                        width: '100%',
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'width 0.3s ease-in-out',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          <DarkModeToggle />

          <Box
            sx={{
              position: 'relative',
              ml: 2,
            }}
          >
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                cursor: 'pointer',
                border: '2px solid transparent',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 12px rgba(76, 175, 80, 0.6)',
                  border: `2px solid ${theme.palette.primary.light}`,
                  transform: 'scale(1.05)',
                },
              }}
              component={Link}
              to="/dashboard"
            >
              pp
            </Avatar>
            <Box
              sx={{
                position: 'absolute',
                bottom: -2,
                right: -2,
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#4caf50',
                border: '2px solid white',
                boxShadow: '0 0 4px rgba(0,0,0,0.2)',
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : '#333333',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default AppHeader;
