import {
  Paper,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
  Title,
  Text
} from '@mantine/core';
import classes from './forgot-password.module.css';
import { authRoutes } from '@/shared/routes';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  return (
    <Container fluid my={40} w={520}>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Вспомнили пароль?{' '}
        <Anchor size="sm" component={Link} to={authRoutes.auth}>
          Войти
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@mantine.dev" required />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Button fullWidth>Восстановить пароль</Button>
        </Group>
      </Paper>
    </Container>
  );
}
