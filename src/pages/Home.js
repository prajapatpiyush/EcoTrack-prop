import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Grid,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import {
  RecyclingOutlined as RecyclingIcon,
  LocalShippingOutlined as TruckIcon,
  CalendarTodayOutlined as CalendarIcon,
  Nature as EcoIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="none" />
    <circle cx="300" cy="200" r="150" fill="#A5D6A7" opacity="0.5" />
    <path d="M350,150 L400,200 L350,250 L300,200 Z" fill="#4CAF50" />
    <path d="M250,150 L300,200 L250,250 L200,200 Z" fill="#4CAF50" />
    <path d="M300,100 L350,150 L300,200 L250,150 Z" fill="#4CAF50" />
    <path d="M300,200 L350,250 L300,300 L250,250 Z" fill="#4CAF50" />
    <circle cx="300" cy="200" r="20" fill="#FFFFFF" />
  </svg>
);

const Home = () => {
  const theme = useTheme();
  // Used for responsive design adjustments in conditional rendering
  // eslint-disable-next-line no-unused-vars
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <CalendarIcon fontSize="large" color="primary" />,
      title: "Easy Scheduling",
      description: "Schedule pickups with just a few clicks. Choose the date and time that works best for you.",
      stats: "2 min average booking time",
      link: "/schedule"
    },
    {
      icon: <TruckIcon fontSize="large" color="primary" />,
      title: "Smart Routing",
      description: "Our intelligent routing system ensures efficient pickup paths, reducing carbon emissions.",
      stats: "30% reduced emissions",
      link: "/how-it-works"
    },
    {
      icon: <RecyclingIcon fontSize="large" color="primary" />,
      title: "Waste Sorting",
      description: "Separate your waste properly with our guidance for maximum recycling efficiency.",
      stats: "95% recycling rate",
      link: "/how-it-works"
    },
    {
      icon: <EcoIcon fontSize="large" color="primary" />,
      title: "Eco-Friendly",
      description: "Join our mission to create a cleaner, greener environment for future generations.",
      stats: "10K+ users making an impact",
      link: "/contact"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 16 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at top right, rgba(76, 175, 80, 0.15), transparent 70%)'
              : 'radial-gradient(circle at top right, rgba(76, 175, 80, 0.2), transparent 70%)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    mb: 1,
                    display: 'block'
                  }}
                >
                  SUSTAINABLE FUTURE
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  color="primary"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: 0,
                      width: 80,
                      height: 4,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 2,
                    }
                  }}
                >
                  Smart, Hassle-Free Waste Pickup at Your Fingertips
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  sx={{
                    mb: 4,
                    maxWidth: '90%',
                    lineHeight: 1.6
                  }}
                >
                  Easily schedule and track your waste pickups while making a positive impact on the environment.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 5 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/schedule"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 6px 20px rgba(76, 175, 80, 0.6)',
                      }
                    }}
                  >
                    Schedule Your Pickup
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/how-it-works"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      borderWidth: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderWidth: 2,
                        backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: { xs: 300, md: 400 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 30px rgba(0, 0, 0, 0.3)'
                    : '0 8px 30px rgba(0, 0, 0, 0.1)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': {
                      transform: 'translateY(0px)',
                    },
                    '50%': {
                      transform: 'translateY(-15px)',
                    },
                    '100%': {
                      transform: 'translateY(0px)',
                    },
                  },
                }}
              >
                <HeroIllustration />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : 'rgba(76, 175, 80, 0.04)',
          borderRadius: { xs: 0, md: '0 0 50px 50px' },
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '30%',
            height: '30%',
            background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, transparent 70%)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                letterSpacing: 2,
                mb: 1,
                display: 'block'
              }}
            >
              OUR ADVANTAGES
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              color="primary"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 4,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                }
              }}
            >
              Why Choose EcoTrack?
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                mt: 3,
                lineHeight: 1.6
              }}
            >
              Our intelligent waste management system makes recycling and waste disposal efficient and eco-friendly.
            </Typography>
          </Box>

          {/* Modern Feature Grid Layout */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid key={index} style={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
                  <Paper
                    elevation={4}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      transition: 'all 0.3s ease-in-out',
                      backgroundColor: theme.palette.mode === 'dark'
                        ? theme.palette.background.default
                        : '#fff',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    {/* Left Side - Icon Column */}
                    <Box
                      sx={{
                        width: { xs: '100%', sm: '35%' },
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(76, 175, 80, 0.2)'
                          : 'rgba(76, 175, 80, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, sm: 4 },
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '30%',
                          height: '100%',
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(to right, rgba(76, 175, 80, 0.2), transparent)'
                            : 'linear-gradient(to right, rgba(76, 175, 80, 0.1), transparent)',
                          transform: 'skewX(-15deg) translateX(10px)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(255, 255, 255, 0.8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          mb: { xs: 2, sm: 3 },
                          transition: 'all 0.3s ease',
                          '& svg': {
                            fontSize: 40,
                            transition: 'all 0.3s ease',
                          },
                          '&:hover': {
                            transform: 'scale(1.1) rotate(5deg)',
                            '& svg': {
                              transform: 'scale(1.2)',
                            }
                          }
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{
                          fontWeight: 'bold',
                          color: theme.palette.primary.main,
                          display: { xs: 'block', sm: 'none' }
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>

                    {/* Right Side - Content */}
                    <Box
                      sx={{
                        flex: 1,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.main,
                            display: { xs: 'none', sm: 'block' },
                            mb: 2
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          sx={{
                            lineHeight: 1.6,
                            mb: 2
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mt: 2,
                          pt: 2,
                          borderTop: '1px solid',
                          borderTopColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            backgroundColor: theme.palette.mode === 'dark'
                              ? 'rgba(76, 175, 80, 0.2)'
                              : 'rgba(76, 175, 80, 0.1)',
                            color: theme.palette.primary.main,
                            fontWeight: 'medium',
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 10,
                            display: 'inline-block'
                          }}
                        >
                          {feature.stats}
                        </Typography>
                        <Button
                          component={Link}
                          to={feature.link}
                          color="primary"
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            fontWeight: 'medium',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              '& .MuiSvgIcon-root': {
                                transform: 'translateX(4px)'
                              }
                            },
                            '& .MuiSvgIcon-root': {
                              transition: 'transform 0.3s ease'
                            }
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(76, 175, 80, 0.1)'
            : 'rgba(165, 214, 167, 0.4)',
          py: { xs: 10, md: 16 },
          mt: 6,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%234caf50\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '20px 20px',
            opacity: 0.5,
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    mb: 1,
                    display: 'block'
                  }}
                >
                  JOIN OUR COMMUNITY
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                    mb: 3
                  }}
                >
                  Ready to make waste management easier?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  Join thousands of satisfied customers who have simplified their waste management process with EcoTrack.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/schedule"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 6px 20px rgba(76, 175, 80, 0.6)',
                      }
                    }}
                  >
                    Get Started Today
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={Link}
                    to="/contact"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      borderWidth: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderWidth: 2,
                        backgroundColor: 'rgba(76, 175, 80, 0.05)',
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                elevation={6}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  textAlign: 'center',
                  backgroundColor: theme.palette.background.paper,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 10px 40px rgba(0, 0, 0, 0.3)'
                    : '0 10px 40px rgba(0, 0, 0, 0.1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    backgroundColor: theme.palette.primary.main,
                  }
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <RecyclingIcon
                    sx={{
                      fontSize: 60,
                      color: theme.palette.primary.main,
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
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.primary.main
                  }}
                >
                  Our Impact So Far
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={4}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main
                      }}
                    >
                      10K+
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Users
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main
                      }}
                    >
                      500T
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Waste Recycled
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main
                      }}
                    >
                      95%
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Satisfaction
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;


