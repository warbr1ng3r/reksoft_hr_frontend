import './app.css';
import { Header } from '@/widgets/header';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { AsideNavbar } from '@/widgets/aside-navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <MantineProvider>
      <Header />
      <AsideNavbar />
      <Outlet />
    </MantineProvider>
  );
}

export default App;
