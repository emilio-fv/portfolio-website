import { Box, List, ListItem, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Headshot from "../../assets/images/headshot.jpg";
import technologies from "../../assets/data/technologies";

const About = (props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        marginX: '15%',
        paddingY: '10vh',
        minHeight: '90vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Typography sx={{ typography: { xs: 'subtitle', sm: 'h5' } }}>About Me</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: 2,
          }}
        >
          <Typography sx={{ fontSize: { xs: '.75rem', sm: '1rem' }}}>
            Hello, my name is Emilio and I am a software developer with a
            background as a classically trained violinist, music teacher, and
            arts administrator. I am passionate about how the intersection of
            creativity & technology shapes the world we live in and aspire to
            play a role in that evolution.
            <br />
            <br />
            I began my journey as a developer at the start of 2022 with a free
            online course that sparked a curiosity in the possibilities of
            learning to code. From there I built small scale projects and
            eventually attended a coding bootcamp offered by Coding Dojo. Since
            completing the bootcamp, I’ve focused on deepening my knowledge of
            popular technologies, developing my skills as a developer, and
            building mobile & desktop web applications for my portfolio.
            <br />
            <br />
            Currently, I’m seeking a software developer role that will allow me
            to work on a team of experience developers, building
            enterprise-level projects and continuing to develop my skills as a
            developer.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box
            component={"img"}
            src={Headshot}
            sx={{
              maxWidth: "100%",
              height: 'auto',
              objectFit: 'contain',
              borderRadius: "2%",
              boxShadow: "6px 6px 0px 0px rgba(255,255,255,0.75)",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: { xs: '.75rem', sm: '1rem' }}}>
          Here are some of the technologies I’ve been working with recently:
        </Typography>
        <Typography
          component={"ul"}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            fontSize: { xs: '.5rem', sm: '1rem' }
          }}
        >
          {technologies.map((item) => {
            return <li>{item}</li>;
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default forwardRef(About);
