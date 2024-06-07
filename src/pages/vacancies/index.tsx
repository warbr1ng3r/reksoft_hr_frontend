import { VacancyCard } from '@/entities/vacancy-card';
import { Stack, Textarea } from '@mantine/core';

export function VacanciesPage() {
  return (
    <Stack gap={24}>
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
      <Textarea autosize placeholder="Введите комментарий" />
    </Stack>
  );
}
