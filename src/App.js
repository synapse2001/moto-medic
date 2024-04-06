import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChatCard from './components/ChatCard';
import Menu from './components/ui';
import MenuItem from './components/ui/navbar-menu';

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
            {/* <ChatCard /> */}
            <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Menu 1">
          {/* Your content for Menu 1 */}
          <HoveredLink href="/menu1">Link 1</HoveredLink>
          <HoveredLink href="/menu1">Link 2</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Menu 2">
          {/* Your content for Menu 2 */}
          <ProductItem
            title="Product 1"
            description="Description of product 1"
            href="/product1"
            src="/product1.jpg"
          />
          <ProductItem
            title="Product 2"
            description="Description of product 2"
            href="/product2"
            src="/product2.jpg"
          />
        </MenuItem>
        {/* Add more MenuItems here if needed */}
      </Menu>
          </div>
          </div>
        </div>
      </ThemeProvider>
  );
}

export default App;