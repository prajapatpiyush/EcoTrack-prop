import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Import context providers
import ThemeContextProvider from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';

// Import layout and components
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';

// Import pages
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Dashboard from './pages/Dashboard';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContextProvider>
      <NotificationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {loading ? (
            <SplashScreen />
          ) : (
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            </Router>
          )}
        </LocalizationProvider>
      </NotificationProvider>
    </ThemeContextProvider>
  );
}

export default App;
