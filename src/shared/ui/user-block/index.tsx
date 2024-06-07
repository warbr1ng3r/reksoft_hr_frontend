import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  UnstyledButtonProps
} from '@mantine/core';
import { TbChevronRight } from 'react-icons/tb';
import classes from './user-button.module.css';

type Props = {
  imgSource: string;
  p?: UnstyledButtonProps['p'];
  title: string;
  subtitle: string;
};

export function UserBlock({ imgSource, title, subtitle, p }: Props) {
  return (
    <UnstyledButton p={p} className={classes.user}>
      <Group>
        <Avatar src={imgSource} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {title}
          </Text>

          <Text c="dimmed" size="xs">
            {subtitle}
          </Text>
        </div>

        <TbChevronRight style={{ width: rem(14), height: rem(14) }} />
      </Group>
    </UnstyledButton>
  );
}
