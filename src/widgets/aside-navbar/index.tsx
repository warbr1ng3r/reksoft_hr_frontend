import { useState } from 'react';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal
} from '@tabler/icons-react';
import styles from './aside-navbar.module.css';
import { UserButton } from '@/widgets/aside-navbar/user-button';

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings }
];

export function AsideNavbar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={styles.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={styles.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMain}>{links}</div>

      <div className={styles.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
