// Framework dependencies
import Link from "next/link";

// Local dependencies
import styles from '../styles/components/AccessDenied.module.scss';
import {ACCESS_DENIED_CONTENT} from '../constants';

export default function AccessDenied() {
  return (
    <div className={styles.access}>
      <h3>{ACCESS_DENIED_CONTENT.TITLE}</h3>
      <p>
        <Link href="/api/auth/signin">
              <a>{ACCESS_DENIED_CONTENT.TEXT}</a>
        </Link>
      </p>
    </div>
  )
}