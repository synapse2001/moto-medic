import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components/NavBar';
import Spotlight from './components/ui/Spotlight';
import carRepairimg from './assets/car-repair.gif'
import BackgroundBeams from './components/ui/BackgroundBeams';


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
        {/* <div className="h-screen w-full v-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center" style={{ position: 'fixed', overflow: 'scroll' }}> */}
        <div className="h-screen w-full v-full relative flex items-center justify-center dark:bg-black" style={{ position: 'fixed', overflow: 'scroll' }}>
          {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black"></div>
          <div style={{ zIndex: 999 }}>
      {/* <BackgroundBeams /> */}
            <Navbar />
          </div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div style={{ height: '50vh' }}>
            <div className=" p-4 max-w-6xl  mx-auto relative z-10  w-full pt-20 md:pt-0 " style={{}}>
              <h2 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Motomedic<br /> your cars' best friend
              </h2>
              <div className="block mx-auto max-w-xs md:max-w-full" style={{ width: '900px', height: 'auto', filter: 'invert(95%)', marginTop: '-100px', marginBottom: '-100px', overflow: 'hidden', maxHeight: 'calc(100% - 100px)' }}>
                <img
                  src={carRepairimg}
                  alt="Car Repair"
                  className="block mx-auto"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
