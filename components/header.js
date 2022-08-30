// Framework dependencies
import Link from "next/link";

// Local dependencies
import Login from './login';
import styles from '../styles/components/Header.module.scss';
import {HEADER_TITLE, NAV_CONTENT} from '../constants';

export default function Header() {
  return (
    <header className={`grid ${styles.header}`}>
      <div className={styles.header__container}>
        <Link href={"/"}>
          <a>
            <h1>{HEADER_TITLE}</h1>
          </a>
        </Link>
      </div>
      <nav className={styles.header__nav}>
          <ul className={styles.header__navItems}>
            <li className={styles.header__navItem}>
              <Link href={NAV_CONTENT.HOME.path}>
                <a>{NAV_CONTENT.HOME.label}</a>
              </Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={NAV_CONTENT.CHARACTER.path}>
                <a>{NAV_CONTENT.CHARACTER.label}</a>
              </Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={NAV_CONTENT.EPISODE.path}>
                <a>{NAV_CONTENT.EPISODE.label}</a>
              </Link>
            </li>
          </ul>
      </nav>
      <div className={styles.header__loginWrapper}>
        <Login />
      </div>
    </header>
  )
}
