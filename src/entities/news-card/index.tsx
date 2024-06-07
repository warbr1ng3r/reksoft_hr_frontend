import { TbBookmark, TbHeart, TbShare } from 'react-icons/tb';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem
} from '@mantine/core';
import styles from './news-card.module.css';
import { UserBlock } from '@/shared/ui/user-block';

export function NewsCard() {
  const linkProps = {
    href: 'https://mantine.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={styles.card}>
      <UserBlock
        imgSource="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        title="Harriette Spoonlicker"
        subtitle="hspoonlicker@outlook.com"
      />
      <Text className={styles.title} fw={500} component="a" {...linkProps}>
        Resident Evil Village review
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but
        takes a very different direction to its predecessor, namely the fact
        that this time round instead of fighting against various mutated
        zombies, you’re now dealing with more occult enemies like werewolves and
        vampires.
      </Text>

      <Image src="https://i.imgur.com/Cij5vdL.png" height={180} radius={10} />

      <Group className={styles.footer}>
        <Group gap={8} mr={0}>
          <ActionIcon className={styles.action}>
            <TbHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
            />
          </ActionIcon>
          <ActionIcon className={styles.action}>
            <TbBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={styles.action}>
            <TbShare
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
