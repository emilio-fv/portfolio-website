import { Box, Link, Typography } from "@mui/material";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box
          component={"img"}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          src={project.img}
        />
      </Box>
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography sx={{ typography: { xs: 'h6', sm: 'h5' }}}>{project.name}</Typography>
        <Box>
          <Link target='_blank' rel='noopener' href={project.github} sx={{ color: "text.primary" }}>
            Github
          </Link>
          {project.deployment ? (
            <Link target='_blank' rel='noopener' sx={{ color: "text.primary" }}>Deployment</Link>
          ) : null}
        </Box>
        <Typography variant='body1'>{project.description}</Typography>
        <Typography>Built with:</Typography>
        <Typography
          component={'ul'} 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)'},
          }}
        >
            {project.technologies.map((item) => {
                return <li>{item}</li>
            })}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
