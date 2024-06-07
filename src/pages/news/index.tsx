import { NewsCard } from '@/entities/news-card';
import { Stack } from '@mantine/core';

export function NewsPage() {
  return (
    <Stack gap={24}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Stack>
  );
}
