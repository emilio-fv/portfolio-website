import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Resume from '../../assets/data/resume.pdf';

const sections = ['About', 'Projects', 'Contact'];

const Navbar = ({ refs }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (section) => {
    setAnchorElNav(null);

    switch (section) {
      case 'About':
        scrollToSection(refs.aboutRef)
        break;
      case 'Projects':
        scrollToSection(refs.projectsRef)
        break;
      case 'Contact':
        scrollToSection(refs.contactRef)
        break;
    }
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeButton = () => {
    window.open(Resume, '_blank')
  }

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component='a'
            onClick={() => scrollToSection(refs.heroRef)}
            sx={{
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.3rem',
              color: 'inherit',
            }}
          >
            EV
          </Typography>

          {/* Mobile: Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section} onClick={() => handleCloseNavMenu(section)}>
                  <Typography textAlign="center">{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile: Logo */}
          <Typography
            variant="h5"
            noWrap
            component='a'
            onClick={() => scrollToSection(refs.heroRef)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              letterSpacing: '.3rem',
              color: 'inherit',
            }}
          >
            EV
          </Typography>

          {/* Menu buttons */}
          <Box sx={{ mr: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button
                onClick={() => scrollToSection(refs.aboutRef)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection(refs.projectsRef)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection(refs.contactRef)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
          </Box>

          {/* Resume button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant='outlined'
              sx={{
                fontSize: { xs: '.5rem', sm: '.75rem' }
              }}
              onClick={() => handleResumeButton()}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;