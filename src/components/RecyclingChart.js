import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

// A simple custom chart component since we don't want to add a chart library dependency
const RecyclingChart = ({ data }) => {
  const theme = useTheme();

  // Calculate the total for percentage calculations
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Waste Breakdown
      </Typography>
      <Box sx={{ display: 'flex', height: 200, mt: 2 }}>
        {data.map((item, index) => {
          const percentage = Math.round((item.value / total) * 100);
          return (
            <Box
              key={item.label}
              sx={{
                flex: item.value,
                backgroundColor: item.color || theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
                borderRadius: '4px 4px 0 0',
                mx: 0.5,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3,
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  top: -25,
                  color: theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {percentage}%
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  p: 1,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Jan
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Feb
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Mar
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Apr
        </Typography>
        <Typography variant="body2" color="textSecondary">
          May
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Jun
        </Typography>
      </Box>
    </Box>
  );
};

export default RecyclingChart;
