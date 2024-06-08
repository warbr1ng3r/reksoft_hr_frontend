import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Text,
  Container,
  Group,
  Button
} from '@mantine/core';
import { authRoutes } from '@/shared/routes';
import { Link } from 'react-router-dom';

export function Auth() {
  return (
    <Container fluid my={40} w={520}>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Нет аккаунта?{' '}
        <Anchor size="sm" component="button">
          <Link to={authRoutes.register}>Зарегистрироваться</Link>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            <Link to={authRoutes.forgotPassword}>Забыли пароль?</Link>
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Войти
        </Button>
      </Paper>
    </Container>
  );
}
