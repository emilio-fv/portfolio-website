import { useContext, useRef, useState } from 'react'
import './App.css'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

let theme = createTheme({
  palette: {
    primary: {
      main: '#061d21'
    },
    text: {
      primary: '#f2f2f2'
    }
  },
  typography: {
    allVariants: {
      color: '#f2f2f2'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#f2f2f2',
          display: 'block',
          borderColor: '#f2f2f2',
          borderRadius: '2%',
          '&:hover': {
            borderColor: '#858585'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#f2f2f2',
          borderColor: '#f2f2f2',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f2f2f2',
            },
            '&:hover fieldset': {
              borderColor: '#f2f2f2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#858585',
            },
          }
        },
        
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#0b3840',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#0b3840',
        }
      }
    }
  }
});

responsiveFontSizes(theme);

const App = () => {  
  const heroRef = useRef();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
        <Navbar refs={{ heroRef, aboutRef, projectsRef, contactRef }}/>
        <Hero ref={heroRef}/>
        <About ref={aboutRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
    </ThemeProvider>
  )
}

export default App
