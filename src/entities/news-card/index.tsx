import { Card, Image, Text, ActionIcon, Group } from '@mantine/core';
import styles from './news-card.module.css';
import { InfoEntityTemplate } from 'src/shared/ui/info-entity-template';
import { MdOutlineForum, MdOutlineShare } from 'react-icons/md';

export function NewsCard() {
  const linkProps = {
    href: 'https://mantine.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <Card withBorder radius="md" className={styles.card}>
      <InfoEntityTemplate
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
        <Group gap={4}>
          <ActionIcon bg="transparent">
            <MdOutlineForum size={24} className={styles.icon} />
          </ActionIcon>
          <span>23</span>
        </Group>

        <Group gap={4}>
          <ActionIcon bg="transparent">
            <MdOutlineShare size={24} className={styles.icon} />
          </ActionIcon>
          <span>45</span>
        </Group>
      </Group>
    </Card>
  );
}
