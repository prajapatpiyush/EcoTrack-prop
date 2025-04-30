import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Fade,
  Divider,
  LinearProgress,
  Zoom,
  Chip,
  Avatar,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  CalendarMonth as CalendarIcon,
  LocalShipping as TruckIcon,
  Recycling as RecyclingIcon,
  PhoneAndroid as PhoneIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [loading, setLoading] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [animateCards, setAnimateCards] = useState(false);
  const stepsRef = useRef(null);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      }

      // Animate cards when scrolled into view
      if (stepsRef.current) {
        const rect = stepsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimateCards(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle step navigation
  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const steps = [
    {
      label: 'Schedule a Pickup',
      description: 'Use our intuitive form to schedule waste pickups in just a few clicks. Select the type of waste, preferred date, and time slot that works best for you.',
      longDescription: 'Our streamlined scheduling process makes waste management effortless. Simply log in to your account, navigate to the Schedule page, and follow the guided steps. You can specify different waste types, set recurring pickups, and even leave special instructions for our team.',
      icon: <CalendarIcon fontSize="large" color="primary" />,
      image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      stats: [
        { value: '2 min', label: 'Average booking time' },
        { value: '24/7', label: 'Scheduling availability' }
      ],
      benefits: ['Flexible scheduling', 'Multiple waste types', 'Special instructions option']
    },
    {
      label: 'Smart Routing System',
      description: 'Our AI-powered system optimizes pickup routes to reduce carbon emissions and provide accurate arrival times on the day of your pickup.',
      longDescription: 'EcoTrack uses advanced algorithms to create the most efficient routes for our collection vehicles. This smart routing system not only reduces our carbon footprint but also ensures timely pickups. You will receive real-time notifications as your pickup approaches, with accurate ETAs and driver information.',
      icon: <TruckIcon fontSize="large" color="primary" />,
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      stats: [
        { value: '30%', label: 'Reduced emissions' },
        { value: '15 min', label: 'Arrival window' }
      ],
      benefits: ['Real-time tracking', 'Reduced carbon footprint', 'Precise arrival estimates']
    },
    {
      label: 'Eco-Friendly Processing',
      description: 'We ensure your waste is properly sorted and processed. Recyclables are sent to specialized facilities, and all waste is handled responsibly.',
      longDescription: 'Once collected, your waste undergoes a thorough sorting process at our state-of-the-art facilities. We separate recyclables by type and ensure they are processed appropriately. Our partnerships with local recycling centers and environmentally responsible disposal facilities guarantee that your waste has minimal environmental impact.',
      icon: <RecyclingIcon fontSize="large" color="primary" />,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      stats: [
        { value: '95%', label: 'Recycling rate' },
        { value: '8', label: 'Material categories' }
      ],
      benefits: ['Advanced sorting technology', 'Specialized processing', 'Landfill diversion']
    },
    {
      label: 'Track Your Impact',
      description: 'Monitor your waste management history and environmental impact through your personalized dashboard with detailed analytics and reports.',
      longDescription: 'Your EcoTrack dashboard provides comprehensive insights into your waste management journey. View detailed breakdowns of your recycling habits, track your environmental impact metrics, and see how your efforts compare to community averages. You can also download personalized reports and share your achievements on social media.',
      icon: <PhoneIcon fontSize="large" color="primary" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      stats: [
        { value: 'Real-time', label: 'Impact tracking' },
        { value: 'Custom', label: 'Reports & analytics' }
      ],
      benefits: ['Detailed waste analytics', 'Environmental impact metrics', 'Shareable achievements']
    }
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            mb: 8,
            pb: 4,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 4,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            }
          }}
        >
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
            SIMPLE PROCESS
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2
            }}
          >
            How EcoTrack Works
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              mb: 4
            }}
          >
            Our streamlined process makes waste management easy, efficient, and environmentally friendly
          </Typography>
        </Box>

        {/* Interactive Process Flow */}
        <Box ref={stepsRef}>
          {isMobile ? (
            // Mobile view - vertical cards with enhanced styling
            <Box>
              {steps.map((step, index) => (
                <Fade
                  in={true}
                  timeout={500 + (index * 300)}
                  key={index}
                >
                  <Card
                    elevation={3}
                    sx={{
                      mb: 5,
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6
                      }
                    }}
                    onClick={() => handleStepClick(index)}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        zIndex: 2,
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        boxShadow: 2
                      }}
                    >
                      {index + 1}
                    </Box>
                    <CardMedia
                      component="img"
                      height="200"
                      image={step.image}
                      alt={step.label}
                      sx={{
                        filter: 'brightness(0.85)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          filter: 'brightness(1)',
                        }
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            mr: 2,
                            p: 1,
                            backgroundColor: theme.palette.mode === 'dark'
                              ? 'rgba(76, 175, 80, 0.2)'
                              : 'rgba(76, 175, 80, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {step.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h2"
                          sx={{ fontWeight: 'medium' }}
                        >
                          {step.label}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {step.description}
                      </Typography>

                      {/* Stats Section */}
                      <Box sx={{ mt: 3, mb: 2 }}>
                        <Grid container spacing={2}>
                          {step.stats.map((stat, statIndex) => (
                            <Grid item xs={6} key={statIndex}>
                              <Box
                                sx={{
                                  textAlign: 'center',
                                  p: 1,
                                  borderRadius: 2,
                                  backgroundColor: theme.palette.mode === 'dark'
                                    ? 'rgba(76, 175, 80, 0.1)'
                                    : 'rgba(76, 175, 80, 0.05)',
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  color="primary"
                                  sx={{ fontWeight: 'bold' }}
                                >
                                  {stat.value}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                  {stat.label}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>

                      {/* Benefits List */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          mt: 2,
                          mb: 1,
                          color: theme.palette.primary.main,
                          fontWeight: 'medium'
                        }}
                      >
                        Key Benefits:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {step.benefits.map((benefit, benefitIndex) => (
                          <Chip
                            key={benefitIndex}
                            label={benefit}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{
                              borderRadius: 1,
                              '& .MuiChip-label': {
                                px: 1
                              }
                            }}
                          />
                        ))}
                      </Box>

                      {/* Learn More Section */}
                      <Box sx={{ mt: 3, textAlign: 'right' }}>
                        <Tooltip title="Learn more about this step">
                          <Button
                            variant="text"
                            color="primary"
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => handleStepClick(index)}
                          >
                            Learn More
                          </Button>
                        </Tooltip>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              ))}
            </Box>
          ) : (
            // Desktop view - interactive stepper with detailed cards
            <Box>
              {/* Interactive Stepper */}
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{ mb: 6 }}
              >
                {steps.map((step, index) => (
                  <Step
                    key={index}
                    completed={index < activeStep}
                    onClick={() => handleStepClick(index)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <StepLabel
                      icon={
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            backgroundColor: index === activeStep
                              ? theme.palette.primary.main
                              : theme.palette.mode === 'dark'
                                ? 'rgba(76, 175, 80, 0.2)'
                                : 'rgba(76, 175, 80, 0.1)',
                            color: index === activeStep
                              ? 'white'
                              : theme.palette.primary.main,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: index === activeStep
                                ? theme.palette.primary.dark
                                : 'rgba(76, 175, 80, 0.2)',
                              transform: 'scale(1.05)'
                            }
                          }}
                        >
                          {step.icon}
                        </Avatar>
                      }
                    >
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{
                          fontWeight: index === activeStep ? 'bold' : 'normal',
                          color: index === activeStep ? theme.palette.primary.main : 'inherit'
                        }}
                      >
                        {step.label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* Active Step Detail Card */}
              <Fade in={true} timeout={500}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 0,
                    borderRadius: 4,
                    overflow: 'hidden',
                    mb: 6,
                    transition: 'all 0.3s ease',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                      : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} md={5}>
                      <Box sx={{ position: 'relative', height: '100%' }}>
                        <CardMedia
                          component="img"
                          image={steps[activeStep].image}
                          alt={steps[activeStep].label}
                          sx={{
                            height: '100%',
                            minHeight: 300,
                            objectFit: 'cover'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p: 2,
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                            color: 'white',
                          }}
                        >
                          <Typography variant="h5" component="h2" gutterBottom>
                            {steps[activeStep].label}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <Box sx={{ p: 4 }}>
                        <Typography variant="h5" component="h3" gutterBottom color="primary">
                          {steps[activeStep].label}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {steps[activeStep].longDescription}
                        </Typography>

                        {/* Stats Grid */}
                        <Grid container spacing={3} sx={{ mt: 2, mb: 3 }}>
                          {steps[activeStep].stats.map((stat, statIndex) => (
                            <Grid item xs={6} key={statIndex}>
                              <Paper
                                elevation={1}
                                sx={{
                                  p: 2,
                                  textAlign: 'center',
                                  borderRadius: 2,
                                  backgroundColor: theme.palette.mode === 'dark'
                                    ? 'rgba(76, 175, 80, 0.1)'
                                    : 'rgba(76, 175, 80, 0.05)',
                                  height: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center'
                                }}
                              >
                                <Typography
                                  variant="h4"
                                  color="primary"
                                  sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                  {stat.value}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                  {stat.label}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>

                        {/* Benefits Section */}
                        <Typography
                          variant="subtitle1"
                          sx={{
                            mt: 3,
                            mb: 2,
                            color: theme.palette.primary.main,
                            fontWeight: 'medium'
                          }}
                        >
                          Key Benefits:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {steps[activeStep].benefits.map((benefit, benefitIndex) => (
                            <Chip
                              key={benefitIndex}
                              label={benefit}
                              size="medium"
                              variant="outlined"
                              color="primary"
                              icon={<CheckCircleIcon />}
                              sx={{
                                borderRadius: 1,
                                mb: 1,
                                '& .MuiChip-label': {
                                  px: 1
                                }
                              }}
                            />
                          ))}
                        </Box>

                        {/* Navigation Buttons */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                          <Button
                            variant="outlined"
                            color="primary"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            startIcon={<ArrowBackIcon />}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            disabled={activeStep === steps.length - 1}
                            onClick={handleNext}
                            endIcon={<ArrowForwardIcon />}
                          >
                            Next
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>

              {/* Process Overview Cards */}
              <Typography
                variant="h5"
                align="center"
                sx={{
                  mb: 4,
                  fontWeight: 'medium',
                  color: theme.palette.primary.main
                }}
              >
                Process Overview
              </Typography>
              <Grid container spacing={3}>
                {steps.map((step, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Zoom in={animateCards} timeout={500 + (index * 200)}>
                      <Card
                        elevation={2}
                        sx={{
                          height: '100%',
                          borderRadius: 3,
                          position: 'relative',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          border: index === activeStep
                            ? `2px solid ${theme.palette.primary.main}`
                            : '2px solid transparent',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: 6
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            backgroundColor: theme.palette.primary.main,
                            opacity: index === activeStep ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                          }
                        }}
                        onClick={() => handleStepClick(index)}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '0.875rem',
                            boxShadow: 2
                          }}
                        >
                          {index + 1}
                        </Box>
                        <CardMedia
                          component="img"
                          height="140"
                          image={step.image}
                          alt={step.label}
                          sx={{
                            filter: index === activeStep ? 'brightness(1)' : 'brightness(0.85)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <CardContent sx={{ p: 2 }}>
                          <Typography
                            variant="subtitle1"
                            component="h3"
                            gutterBottom
                            sx={{
                              fontWeight: index === activeStep ? 'bold' : 'medium',
                              color: index === activeStep ? theme.palette.primary.main : 'inherit'
                            }}
                          >
                            {step.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {step.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>

        {/* FAQ Section */}
        <Box
          sx={{
            mt: 12,
            mb: 8,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -60,
              left: 0,
              width: '100%',
              height: 1,
              backgroundColor: theme.palette.divider,
            }
          }}
        >
          <Typography
            variant="overline"
            align="center"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              letterSpacing: 2,
              mb: 1,
              display: 'block'
            }}
          >
            COMMON QUESTIONS
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              mb: 6
            }}
          >
            Find answers to the most common questions about our waste management services
          </Typography>

          {loading ? (
            <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
              <LinearProgress color="primary" />
            </Box>
          ) : (
            <Fade in={!loading} timeout={1000}>
              <Box
                sx={{
                  maxWidth: 900,
                  mx: 'auto',
                  px: { xs: 2, md: 0 }
                }}
              >
                <FaqAccordion />
              </Box>
            </Fade>
          )}
        </Box>

        {/* Scroll Indicator */}
        <Fade in={showScrollIndicator} timeout={1000}>
          <Box
            sx={{
              display: showScrollIndicator ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              opacity: 0.8
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 1,
                borderRadius: 5,
                backgroundColor: theme.palette.background.paper,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" color="textSecondary" gutterBottom>
                Scroll for more
              </Typography>
              <KeyboardArrowDownIcon
                color="primary"
                fontSize="small"
                sx={{
                  animation: 'bounce 2s infinite',
                  '@keyframes bounce': {
                    '0%, 20%, 50%, 80%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '40%': {
                      transform: 'translateY(-5px)',
                    },
                    '60%': {
                      transform: 'translateY(-3px)',
                    },
                  },
                }}
              />
            </Paper>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

        {/* CTA Section */}
        <Box
          sx={{
            position: 'relative',
            py: 8,
            overflow: 'hidden',
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
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.background.paper
                : '#fff',
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 8
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '4px 4px 0 0',
              }
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
              sx={{ fontWeight: 'bold' }}
            >
              Ready to make a difference?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              Join thousands of users who are making a positive impact on the environment with EcoTrack's smart waste management solutions.
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: theme.palette.primary.main,
                      mb: 2
                    }}
                  >
                    <CalendarIcon />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Easy Scheduling
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Book pickups in just a few clicks
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: theme.palette.primary.main,
                      mb: 2
                    }}
                  >
                    <RecyclingIcon />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Eco-Friendly
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Responsible waste processing
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: theme.palette.primary.main,
                      mb: 2
                    }}
                  >
                    <PhoneIcon />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Track Impact
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Monitor your environmental contribution
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/schedule"
              sx={{
                py: 1.5,
                px: 6,
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.6)',
                }
              }}
            >
              Schedule Your First Pickup
            </Button>

            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: 3 }}
            >
              No credit card required. Start making a difference today.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
