import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Text,
  Container,
  Button
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { authRoutes } from '@/shared/routes';

export function Register() {
  return (
    <Container fluid my={40} w={520}>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Уже есть аккаунт?{' '}
        <Anchor size="sm" component={Link} to={authRoutes.auth}>
          Войти
        </Anchor>
      </Text>
      <Paper withBorder p={30} mt={30} radius="md">
        <TextInput label="Имя" placeholder="Введите имя" mt="md" required />
        <TextInput
          label="Фамилия"
          placeholder="Введите фамилию"
          mt="md"
          required
        />
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          mt="md"
          required
        />
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          required
          mt="md"
        />
        <PasswordInput
          label="Повторите пароль"
          placeholder="Повторите пароль"
          required
          mt="md"
        />

        <Button fullWidth mt="xl">
          Зарегистрироваться
        </Button>
      </Paper>
    </Container>
  );
}
