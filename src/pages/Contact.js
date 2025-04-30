import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Paper,
  useTheme
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Send as SendIcon
} from '@mui/icons-material';

const Contact = () => {
  // Using theme for styling
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, this would send data to a server
      console.log('Form submitted:', formData);

      // Show success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
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

  const contactInfo = [
    {
      icon: <LocationIcon fontSize="large" color="primary" />,
      title: 'Our Location',
      details: 'IT Park Indore'
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email Us',
      details: 'info@ecotrack.com'
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Call Us',
      details: '+91 1234567890'
    }
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h5" gutterBottom>
                Get In Touch
              </Typography>
              <Typography variant="body1" color="textSecondary" >
                Have questions about our services? Need help with scheduling? Our team is here to assist you.
              </Typography>

              <Box sx={{ mt: 4 }}>
                {contactInfo.map((info, index) => (
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ mr: 2 }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {info.details}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Send Us a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
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
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        multiline
                        rows={6}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ py: 1.5, px: 4 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Card elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box
              component="iframe"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1428572459126!2d75.87061747513017!3d22.68572527941125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd11cbaf30c5%3A0xeddd100ed6a7f182!2sIT%20park%20indore!5e0!3m2!1sen!2sin!4v1746014398623!5m2!1sen!2sin" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="EcoTrack Location"
            />
          </Card>
        </Box>
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
  );
};

export default Contact;
