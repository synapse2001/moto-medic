import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Navbar } from './components/NavBar';
import Spotlight from './components/ui/Spotlight';
import background from './assets/background.png';
import WelcomePage from './pages/WelcomePage';
import Testimonial from './pages/TestiMonial';

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
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
};

const scrollbarStyle = `
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar-track {
      background: #555;
    }
    ::-webkit-scrollbar-thumb {
      background: #000000;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`;

function App() {
  const path = window.location.pathname;
  
  const renderContent = () => {
    switch (path) {
      case "/testimonials":
        return (
          <Container maxWidth='md' style={containerStyle}>
            <Testimonial />
          </Container>
        );
      case "/":
      default:
        return (
          <Container maxWidth='md' style={containerStyle}>
            
            <WelcomePage />
          </Container>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <style>{scrollbarStyle}</style>
      <div className="dark" style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
        <img src={background} alt="Background" style={{ position: 'absolute',  width: '100%', height: '100%', inset: 0, objectFit: 'cover', zIndex: -1, backgroundColor: 'black', filter: 'brightness(20%)' }} />
        <div style={{ zIndex: 999 }}>
          {renderContent()}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
