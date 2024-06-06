import ReksoftLogo from '@/shared/icons/Rectangle.svg?react';
import style from './header.module.css';
import { Button } from '@mantine/core';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <ReksoftLogo />
        <Button color={'#D7272D'}>Войти</Button>
      </div>
    </header>
  );
}
