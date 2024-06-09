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
import { observer } from 'mobx-react-lite';
import { authModel } from '@/pages/auth-group/auth/model';

export const Auth = observer(() => {
  return (
    <Container fluid my={40} w={520}>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Нет аккаунта?{' '}
        <Anchor size="sm" component={Link} to={authRoutes.register}>
          Зарегистрироваться
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
          <Anchor component={Link} size="sm" to={authRoutes.forgotPassword}>
            Забыли пароль?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={authModel.login}>
          Войти
        </Button>
      </Paper>
    </Container>
  );
});
