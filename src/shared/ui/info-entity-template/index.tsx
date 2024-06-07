import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  UnstyledButtonProps
} from '@mantine/core';
import { TbChevronRight } from 'react-icons/tb';
import classes from './info-entity-template.module.css';

type Props = {
  imgSource?: string;
  p?: UnstyledButtonProps['p'];
  w?: UnstyledButtonProps['w'];
  hasHover?: boolean;
  hasChevron?: boolean;
  title: string;
  subtitle: string;
};

export function InfoEntityTemplate({
  imgSource,
  title,
  subtitle,
  hasChevron,
  p,
  w,
  hasHover
}: Props) {
  return (
    <div>
      <UnstyledButton
        w={w || 'inherit'}
        p={p}
        data-hover={hasHover ? 'hover' : null}
        className={classes.user}
      >
        <Group>
          {imgSource && <Avatar src={imgSource} radius="xl" />}

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {title}
            </Text>

            <Text c="dimmed" size="xs">
              {subtitle}
            </Text>
          </div>

          {hasChevron && (
            <TbChevronRight style={{ width: rem(14), height: rem(14) }} />
          )}
        </Group>
      </UnstyledButton>
    </div>
  );
}
