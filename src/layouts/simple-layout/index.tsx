import { AppShell, Center } from '@mantine/core';
import { Header } from '@/widgets/header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function SimpleLayout() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main bg="gray.0">
        <Center>
          <Suspense fallback={<h1 />}>
            <Outlet />
          </Suspense>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
