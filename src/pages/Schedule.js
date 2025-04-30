import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Snackbar,
  Alert,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Fade,
  Zoom
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import FormStepper from '../components/FormStepper';
import { useNotification } from '../contexts/NotificationContext';

const Schedule = () => {
  const theme = useTheme();
  const { showNotification } = useNotification();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    email: '',
    phone: '',
    wasteType: '',
    date: null,
    timeSlot: null,
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Show welcome message on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      showNotification('Welcome to the scheduling page! Fill out the form to schedule your pickup.', 'info');
    }, 1000);

    return () => clearTimeout(timer);
  }, [showNotification]);

  const wasteTypes = [
    { value: 'household', label: 'Household Waste' },
    { value: 'recyclables', label: 'Recyclables' },
    { value: 'ewaste', label: 'E-Waste' },
    { value: 'garden', label: 'Garden Waste' },
    { value: 'hazardous', label: 'Hazardous Materials' },
    { value: 'bulky', label: 'Bulky Items' }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)' },
    { value: 'evening', label: 'Evening (4:00 PM - 8:00 PM)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date
    });

    if (errors.date) {
      setErrors({
        ...errors,
        date: null
      });
    }
  };

  // Removed unused functions

  // Validate specific step
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 0) {
      // Validate personal information
      if (!formData.name.trim()) newErrors.name = 'Name is required';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }

      const phoneRegex = /^\d{10}$/;
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ''))) {
        newErrors.phone = 'Invalid phone number (10 digits required)';
      }
    } else if (step === 1) {
      // Validate address information
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP Code is required';
    } else if (step === 2) {
      // Validate pickup details
      if (!formData.wasteType) newErrors.wasteType = 'Waste type is required';
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showNotification('Please fix the errors before proceeding.', 'error');
    }
  };

  // Handle back step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateStep(2)) {
      // In a real app, this would send data to a server
      console.log('Form submitted:', formData);

      // Show success message
      setSnackbar({
        open: true,
        message: 'Pickup scheduled successfully!',
        severity: 'success'
      });

      // Set form as submitted
      setFormSubmitted(true);

      // Move to confirmation step
      setActiveStep(3);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          address: '',
          city: '',
          zipCode: '',
          email: '',
          phone: '',
          wasteType: '',
          date: null,
          timeSlot: null,
          notes: ''
        });
        setActiveStep(0);
        setFormSubmitted(false);
      }, 5000);
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  // Render step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Fade in={activeStep === 0} timeout={500}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  variant="outlined"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Fade>
        );
      case 1:
        return (
          <Fade in={activeStep === 1} timeout={500}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Address Information
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  variant="outlined"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="ZIP Code"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  error={!!errors.zipCode}
                  helperText={errors.zipCode}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Fade>
        );
      case 2:
        return (
          <Fade in={activeStep === 2} timeout={500}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Pickup Details
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={!!errors.wasteType}>
                  <InputLabel id="waste-type-label">Type of Waste</InputLabel>
                  <Select
                    labelId="waste-type-label"
                    name="wasteType"
                    value={formData.wasteType}
                    onChange={handleChange}
                    label="Type of Waste"
                  >
                    {wasteTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.wasteType && (
                    <FormHelperText>{errors.wasteType}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Pickup Date"
                  value={formData.date}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.date,
                      helperText: errors.date
                    }
                  }}
                  disablePast
                  minDate={dayjs().add(1, 'day')}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={!!errors.timeSlot}>
                  <InputLabel id="time-slot-label">Preferred Time</InputLabel>
                  <Select
                    labelId="time-slot-label"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    label="Preferred Time"
                  >
                    {timeSlots.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.timeSlot && (
                    <FormHelperText>{errors.timeSlot}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Fade>
        );
      case 3:
        return (
          <Zoom in={activeStep === 3} timeout={500}>
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                  animation: 'bounce 1s ease-in-out'
                }}
              >
                <CheckIcon
                  color="primary"
                  sx={{
                    fontSize: 80,
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(165, 214, 167, 0.4)',
                  }}
                />
              </Box>
              <Typography variant="h4" color="primary" gutterBottom>
                Thank You!
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your pickup has been scheduled successfully.
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                We've sent a confirmation email to {formData.email} with all the details.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                You will be redirected to the home page in a few seconds...
              </Typography>
            </Box>
          </Zoom>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Schedule a Pickup
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            sx={{ mb: 4 }}
          >
            Complete the form below to schedule your waste pickup
          </Typography>

          {/* Form Stepper */}
          <FormStepper activeStep={activeStep} />

          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              mt: 4,
              transition: 'all 0.3s ease-in-out',
              transform: formSubmitted ? 'scale(1.02)' : 'scale(1)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <Button
                    disabled={activeStep === 0 || activeStep === 3}
                    onClick={handleBack}
                    startIcon={<ArrowBackIcon />}
                    sx={{ visibility: activeStep === 0 || activeStep === 3 ? 'hidden' : 'visible' }}
                  >
                    Back
                  </Button>

                  {activeStep === 2 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ py: 1, px: 4 }}
                      disabled={formSubmitted}
                    >
                      Schedule Pickup
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ py: 1, px: 4 }}
                      disabled={activeStep === 3}
                    >
                      {activeStep === 2 ? 'Finish' : 'Next'}
                    </Button>
                  )}
                </Box>
              </form>
            </CardContent>
          </Card>
        </Container>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
};

export default Schedule;
