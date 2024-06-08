import ReksoftLogo from '@/shared/icons/Rectangle.svg?react';
import style from './header.module.css';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link to="/">
          <ReksoftLogo />
        </Link>
        <Button color={'#D7272D'}>Войти</Button>
      </div>
    </header>
  );
}
