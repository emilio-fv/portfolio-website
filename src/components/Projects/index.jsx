import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef } from 'react';
import projects from '../../assets/data/projects';
import ProjectCard from '../ProjectCard';

const Projects = (props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        marginX: '15%',
        paddingY: '10vh',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <Typography sx={{ typography: { xs: 'subtitle', sm: 'h5' } }}>Projects</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}
      >
        {projects.map((project) => {
          return <ProjectCard project={project}/>
        })}
      </Box>
    </Box>
  )
}

export default forwardRef(Projects);