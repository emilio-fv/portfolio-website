import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef } from 'react';
import ContactForm from '../ContactForm';

const Contact = (props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        marginX: '15%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4
      }}
    >
      <Typography variant='h5'>Contact Me</Typography>
      <Typography>
        Always happy to connect with fellow developers and creatives!
      </Typography>
      <ContactForm />
    </Box>
  )
}

export default forwardRef(Contact);