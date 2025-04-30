import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FaqAccordion = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: 'How does EcoTrack help the environment?',
      answer:
        'EcoTrack optimizes waste collection routes, reducing carbon emissions from collection vehicles. We also ensure proper waste sorting and recycling, minimizing landfill waste and promoting sustainable waste management practices.',
    },
    {
      question: 'What types of waste can I schedule for pickup?',
      answer:
        'We handle various types of waste including household waste, recyclables (paper, plastic, glass, metal), e-waste (electronics), garden waste, hazardous materials (batteries, chemicals), and bulky items (furniture, appliances).',
    },
    {
      question: 'How far in advance should I schedule a pickup?',
      answer:
        'We recommend scheduling at least 24 hours in advance for regular pickups. For bulky items or hazardous materials, please schedule 48-72 hours in advance to ensure proper handling and equipment availability.',
    },
    {
      question: 'Can I track my waste collection vehicle in real-time?',
      answer:
        'Yes! On the day of your scheduled pickup, you can track the collection vehicle in real-time through our dashboard. You will receive notifications when the vehicle is approaching your location.',
    },
    {
      question: 'How do I know how much waste I have recycled?',
      answer:
        'Your dashboard provides detailed statistics on your waste management history, including the amount of waste recycled, carbon emissions saved, and your environmental impact over time.',
    },
    {
      question: 'Is there a subscription option for regular pickups?',
      answer:
        'Yes, we offer weekly, bi-weekly, and monthly subscription plans for regular waste collection. Subscribers receive priority scheduling and discounted rates.',
    },
  ];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" component="h2" color="primary" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: '8px !important',
              overflow: 'hidden',
              '&:before': {
                display: 'none',
              },
              boxShadow: theme.palette.mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.background.paper
                  : theme.palette.primary.light + '20',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark'
                    ? theme.palette.background.paper + '80'
                    : theme.palette.primary.light + '40',
                },
              }}
            >
              <Typography variant="subtitle1" fontWeight="medium">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="textSecondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FaqAccordion;
