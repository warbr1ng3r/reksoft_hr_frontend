import { Card, Text, Group, Button } from '@mantine/core';
import styles from './news-card.module.css';
import { InfoEntityTemplate } from 'src/shared/ui/info-entity-template';

export function VacancyCard() {
  const linkProps = {
    href: 'https://mantine.dev',
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <Card withBorder radius="md" className={styles.card}>
      <InfoEntityTemplate
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

      <Group className={styles.footer}>
        <Group gap={8} mr={0}>
          <Button variant="filled" color="violet.6">
            Откликнуться
          </Button>
          <Button variant="outline" color="violet.6">
            Подписаться
          </Button>
        </Group>
      </Group>
    </Card>
  );
}
