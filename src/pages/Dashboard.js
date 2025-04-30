import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Avatar,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  Paper,
  Tab,
  Tabs,
  LinearProgress
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Add as AddIcon,
  History as HistoryIcon,
  LocationOn as LocationIcon,
  Recycling as RecyclingIcon,
  BarChart as BarChartIcon,
  Nature as EcoIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import RecyclingChart from '../components/RecyclingChart';
import { useNotification } from '../contexts/NotificationContext';

// Mock data for upcoming pickups
const upcomingPickups = [
  {
    id: 1,
    date: 'May 15, 2025',
    time: '(8:00 AM - 12:00 PM)',
    address: 'SVCE',
    wasteType: 'Recyclables'
  },
  {
    id: 2,
    date: 'May 22, 2025',
    time: '(12:00 PM - 4:00 PM)',
    address: 'IT park ',
    wasteType: 'Household Waste'
  }
];

// Mock data for pickup history
const pickupHistory = [
  {
    id: 101,
    date: 'April 30, 2025',
    time: '(8:00 AM - 12:00 PM)',
    address: 'Silicon',
    wasteType: 'E-Waste',
    status: 'Completed'
  },
  {
    id: 102,
    date: 'April 15, 2025',
    time: '(4:00 PM - 8:00 PM)',
    address: 'Silicon park',
    wasteType: 'Household Waste',
    status: 'Completed'
  },
  {
    id: 103,
    date: 'April 1, 2025',
    time: '(12:00 PM - 4:00 PM)',
    address: 'Annpurna',
    wasteType: 'Recyclables',
    status: 'Completed'
  }
];

// Mock data for recycling chart
const recyclingData = [
  { label: 'Paper', value: 45, color: '#42A5F5' }, // Blue
  { label: 'Plastic', value: 30, color: '#FFA726' }, // Orange
  { label: 'Glass', value: 15, color: '#66BB6A' }, // Green
  { label: 'Metal', value: 10, color: '#EC407A' }, // Pink
  { label: 'Other', value: 5, color: '#7E57C2' }, // Purple
];

const Dashboard = () => {
  const theme = useTheme();
  const { showNotification } = useNotification();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      showNotification('Welcome back, John! You have 2 upcoming pickups.', 'info');
    }, 1500);

    return () => clearTimeout(timer);
  }, [showNotification]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = (pickup) => {
    setSelectedPickup(pickup);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancelPickup = () => {
    // In a real app, this would send a request to cancel the pickup
    console.log('Cancelling pickup:', selectedPickup);
    handleCloseDialog();
    showNotification('Pickup cancelled successfully', 'success');
  };

  const getWasteTypeColor = (wasteType) => {
    switch(wasteType) {
      case 'Recyclables':
        return theme.palette.info.main;
      case 'Household Waste':
        return theme.palette.warning.main;
      case 'E-Waste':
        return theme.palette.error.main;
      case 'Garden Waste':
        return theme.palette.success.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h3" component="h1" color="primary">
            Your Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>PP</Avatar>
            <Typography variant="subtitle1">Piyush Prajapati</Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Upcoming Pickups Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
              <CardHeader
                title="Upcoming Pickups"
                titleTypographyProps={{ variant: 'h5', color: 'primary' }}
                sx={{ pb: 0 }}
              />
              <CardContent>
                {upcomingPickups.length > 0 ? (
                  <List>
                    {upcomingPickups.map((pickup) => (
                      <React.Fragment key={pickup.id}>
                        <ListItem
                          alignItems="flex-start"
                          secondaryAction={
                            <Button
                              variant="outlined"
                              color="primary"
                              startIcon={<EditIcon />}
                              onClick={() => handleOpenDialog(pickup)}
                              size="small"
                            >
                              Edit
                            </Button>
                          }
                        >
                          <ListItemIcon>
                            <CalendarIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <Typography variant="subtitle1" component="span">
                                  {pickup.date}
                                </Typography>
                                <Chip
                                  label={pickup.wasteType}
                                  size="small"
                                  sx={{
                                    ml: 1,
                                    backgroundColor: getWasteTypeColor(pickup.wasteType),
                                    color: '#fff'
                                  }}
                                />
                              </Box>
                            }
                            secondary={
                              <>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                  <TimeIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.text.secondary }} />
                                  <Typography variant="body2" color="textSecondary" component="span">
                                    {pickup.time}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <LocationIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.text.secondary }} />
                                  <Typography variant="body2" color="textSecondary" component="span">
                                    {pickup.address}
                                  </Typography>
                                </Box>
                              </>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                ) : (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="body1" color="textSecondary">
                      No upcoming pickups scheduled.
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/schedule"
                      sx={{ mt: 2 }}
                    >
                      Schedule a Pickup
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Pickup History Card */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
              <CardHeader
                title="Pickup History"
                titleTypographyProps={{ variant: 'h5', color: 'primary' }}
                sx={{ pb: 0 }}
              />
              <CardContent>
                <List>
                  {pickupHistory.map((pickup) => (
                    <React.Fragment key={pickup.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemIcon>
                          <HistoryIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                              <Typography variant="subtitle1" component="span">
                                {pickup.date}
                              </Typography>
                              <Chip
                                label={pickup.status}
                                size="small"
                                color="success"
                                sx={{ ml: 1 }}
                              />
                            </Box>
                          }
                          secondary={
                            <>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <RecyclingIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.text.secondary }} />
                                <Typography variant="body2" color="textSecondary" component="span">
                                  {pickup.wasteType}
                                </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <TimeIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.text.secondary }} />
                                <Typography variant="body2" color="textSecondary" component="span">
                                  {pickup.time}
                                </Typography>
                              </Box>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Statistics Card */}
          <Grid item xs={12}>
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="dashboard tabs"
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab
                    icon={<BarChartIcon />}
                    iconPosition="start"
                    label="Statistics"
                    id="tab-0"
                    aria-controls="tabpanel-0"
                  />
                  <Tab
                    icon={<RecyclingIcon />}
                    iconPosition="start"
                    label="Recycling Breakdown"
                    id="tab-1"
                    aria-controls="tabpanel-1"
                  />
                  <Tab
                    icon={<EcoIcon />}
                    iconPosition="start"
                    label="Environmental Impact"
                    id="tab-2"
                    aria-controls="tabpanel-2"
                  />
                </Tabs>
              </Box>

              {/* Tab Panel 0: Statistics */}
              <Box
                role="tabpanel"
                hidden={tabValue !== 0}
                id="tabpanel-0"
                aria-labelledby="tab-0"
                sx={{ p: 3 }}
              >
                {loading ? (
                  <Box sx={{ width: '100%', mt: 2, mb: 4 }}>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                      Loading your statistics...
                    </Typography>
                    <LinearProgress color="primary" />
                  </Box>
                ) : (
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Paper
                        elevation={2}
                        sx={{
                          textAlign: 'center',
                          p: 3,
                          borderRadius: 3,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: 6
                          }
                        }}
                      >
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                          125 kg
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          Waste Recycled
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Paper
                        elevation={2}
                        sx={{
                          textAlign: 'center',
                          p: 3,
                          borderRadius: 3,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: 6
                          }
                        }}
                      >
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                          12
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          Pickups Completed
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Paper
                        elevation={2}
                        sx={{
                          textAlign: 'center',
                          p: 3,
                          borderRadius: 3,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: 6
                          }
                        }}
                      >
                        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                          45 kg
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          CO₂ Emissions Saved
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                )}
              </Box>

              {/* Tab Panel 1: Recycling Breakdown */}
              <Box
                role="tabpanel"
                hidden={tabValue !== 1}
                id="tabpanel-1"
                aria-labelledby="tab-1"
                sx={{ p: 3 }}
              >
                {loading ? (
                  <Box sx={{ width: '100%', mt: 2, mb: 4 }}>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                      Loading recycling data...
                    </Typography>
                    <LinearProgress color="primary" />
                  </Box>
                ) : (
                  <RecyclingChart data={recyclingData} />
                )}
              </Box>

              {/* Tab Panel 2: Environmental Impact */}
              <Box
                role="tabpanel"
                hidden={tabValue !== 2}
                id="tabpanel-2"
                aria-labelledby="tab-2"
                sx={{ p: 3 }}
              >
                {loading ? (
                  <Box sx={{ width: '100%', mt: 2, mb: 4 }}>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }}>
                      Calculating environmental impact...
                    </Typography>
                    <LinearProgress color="primary" />
                  </Box>
                ) : (
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Your Environmental Impact
                    </Typography>
                    <Typography variant="body1" paragraph>
                      By using EcoTrack for your waste management, you've contributed to:
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={12} md={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            height: '100%'
                          }}
                        >
                          <EcoIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                          <Typography variant="h6" gutterBottom>
                            Saved Trees
                          </Typography>
                          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                            3
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Through paper recycling
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            height: '100%'
                          }}
                        >
                          <RecyclingIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                          <Typography variant="h6" gutterBottom>
                            Plastic Saved
                          </Typography>
                          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                            30 kg
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            From entering oceans
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            height: '100%'
                          }}
                        >
                          <BarChartIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                          <Typography variant="h6" gutterBottom>
                            Energy Saved
                          </Typography>
                          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                            120 kWh
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Through recycling efforts
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Floating Action Button */}
        <Fab
          color="primary"
          aria-label="add"
          component={Link}
          to="/schedule"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            boxShadow: 3
          }}
        >
          <AddIcon />
        </Fab>

        {/* Edit/Cancel Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>Manage Pickup</DialogTitle>
          <DialogContent>
            {selectedPickup && (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  {selectedPickup.date} - {selectedPickup.time}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {selectedPickup.address}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Waste Type: {selectedPickup.wasteType}
                </Typography>
                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                  * Cancellations must be made at least 24 hours before the scheduled pickup.
                </Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
            <Button
              component={Link}
              to="/schedule"
              color="primary"
              variant="outlined"
              startIcon={<EditIcon />}
            >
              Edit Details
            </Button>
            <Button
              onClick={handleCancelPickup}
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Cancel Pickup
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Dashboard;
