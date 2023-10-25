import { Box, Typography } from '@mui/material';
import React, { forwardRef } from 'react';

const Hero = (props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        marginX: '15%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography sx={{ typography: { xs: 'body1', sm: 'h6' }}}>Hi, my name is</Typography>
      <Typography sx={{ typography: { xs: 'h4', sm: 'h2' }}}>Emilio Vazquez</Typography>
      <Typography sx={{ filter: 'brightness(.75)', typography: { xs: 'h5', sm: 'h3' }}}>I'm a software developer</Typography>
    </Box>
  )
}

export default forwardRef(Hero);