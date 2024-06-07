import { useState } from 'react';
import { MdWork, MdLocalFireDepartment } from 'react-icons/md';
import styles from './aside-navbar.module.css';
import { UserBlock } from '@/shared/ui/user-block';
import { Center } from '@mantine/core';
import { Link } from 'react-router-dom';

export function AsideNavbar() {
  const [active, setActive] = useState('Новости');

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMain}>
        <Link
          className={styles.link}
          data-active={'Новости' === active || undefined}
          to={'/news'}
          onClick={(event) => {
            event.preventDefault();
            setActive('Новости');
          }}
        >
          <Center className={styles.iconContainer} bg="red.0">
            <MdLocalFireDepartment size={11} className={styles.newsIcon} />
          </Center>
          <span>Новости</span>
        </Link>

        <Link
          className={styles.link}
          data-active={'Вакансии' === active || undefined}
          to={'/vacancies'}
          onClick={(event) => {
            event.preventDefault();
            setActive('Вакансии');
          }}
        >
          <Center className={styles.iconContainer} bg="violet.0">
            <MdWork size={11} className={styles.vacanciesIcon} />
          </Center>
          <span>Вакансии</span>
        </Link>
      </div>

      <div className={styles.footer}>
        <UserBlock
          p="md"
          imgSource="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          title="Harriette Spoonlicker"
          subtitle="hspoonlicker@outlook.com"
        />
      </div>
    </nav>
  );
}
