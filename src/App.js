import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChatCard from './components/ChatCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#red',
    },
    background: {
      default: '#191919',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="dark">
        <div className="h-screen w-full v-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div style={{zIndex:999}}>
            <ChatCard />
          </div>
          </div>
        </div>
      </ThemeProvider>
  );
}

export default App;