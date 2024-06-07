import './app.css';
import { Header } from '@/widgets/header';
import '@mantine/core/styles.css';
import { AppShell, Container, Flex, MantineProvider } from '@mantine/core';
import { AsideNavbar } from '@/widgets/aside-navbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: true, desktop: false }
        }}
        padding="md"
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Navbar>
          <AsideNavbar />
        </AppShell.Navbar>

        <AppShell.Main bg={'#F8F9FA'}>
          <Container px={60}>
            <Suspense fallback={<h1 />}>
              <Outlet />
            </Suspense>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
