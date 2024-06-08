import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Center,
  Flex
} from '@mantine/core';
import Illustration from '@/shared/icons/404.svg?react';
import styles from './page-404.module.css';

export function Page404() {
  return (
    <Container className={styles.root}>
      <Center className={styles.inner}>
        <Illustration className={styles.image} />
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap={16}
          className={styles.content}
        >
          <Title className={styles.title}>Nothing to see here</Title>
          <Text c="dimmed" size="lg" ta="center" className={styles.description}>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button size="md">Take me back to home page</Button>
          </Group>
        </Flex>
      </Center>
    </Container>
  );
}
