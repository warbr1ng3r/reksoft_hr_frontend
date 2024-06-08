import { AppShell, Container } from '@mantine/core';
import { Header } from '@/widgets/header';
import { AsideNavbar } from '@/widgets/aside-navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
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
  );
}
