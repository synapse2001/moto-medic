import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Card, CardContent, Typography } from '@mui/material';
import { Navbar } from './components/NavBar';
import Spotlight from './components/ui/Spotlight';
import background from './assets/background.png';
import WelcomePage from './pages/WelcomePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E76F00',
    },
    secondary: {
      main: '#C08B5C',
    },
    background: {
      default: '#000',
    },
  },
});

const containerStyle = {
  height: '100vh',
  display: 'flex',
  // flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
};
const scrollbarStyle = `
    /* Define scrollbar styles */
    ::-webkit-scrollbar {
      width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #555; /* Set track color */
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000000; /* Set handle color */
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; /* Set handle color on hover */
    }
  `;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <style>{scrollbarStyle}</style>
      <div className="dark" style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        <img src={background} alt="Background" style={{ position: 'absolute',  width: '100%', height: '100%',inset: 0, objectFit: 'cover', zIndex: -1, backgroundColor: 'black', filter: 'brightness(10%)' }} />
        <div style={{ zIndex: 999 }}>
          <Container maxWidth='md' style={containerStyle}>
            <WelcomePage />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
