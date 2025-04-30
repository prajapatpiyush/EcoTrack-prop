import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  useTheme 
} from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  LinkedIn as LinkedInIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        py: 6,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              EcoTrack
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Smart, Hassle-Free Waste Pickup at Your Fingertips
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" color="primary" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="primary" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" color="primary" size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" color="primary" size="small">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="text.secondary" underline="hover" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="/schedule" color="text.secondary" underline="hover" sx={{ mb: 1 }}>
                Schedule Pickup
              </Link>
              <Link href="/dashboard" color="text.secondary" underline="hover" sx={{ mb: 1 }}>
                Dashboard
              </Link>
              <Link href="/how-it-works" color="text.secondary" underline="hover" sx={{ mb: 1 }}>
                How It Works
              </Link>
              <Link href="/contact" color="text.secondary" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                IT Park Indore
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                info@ecotrack.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                +91 1234567890
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} EcoTrack. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
