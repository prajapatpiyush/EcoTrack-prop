import React, { createContext, useContext, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

// Create a context for notifications
const NotificationContext = createContext({
  showNotification: () => {},
  hideNotification: () => {},
});

// Custom hook to use the notification context
export const useNotification = () => useContext(NotificationContext);

// Notification provider component
export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'info', // 'error', 'warning', 'info', 'success'
    autoHideDuration: 6000,
  });

  // Show a notification
  const showNotification = (message, severity = 'info', autoHideDuration = 6000) => {
    setNotification({
      open: true,
      message,
      severity,
      autoHideDuration,
    });
  };

  // Hide the notification
  const hideNotification = () => {
    setNotification((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification }}>
      {children}
      <Snackbar
        open={notification.open}
        autoHideDuration={notification.autoHideDuration}
        onClose={hideNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={hideNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
