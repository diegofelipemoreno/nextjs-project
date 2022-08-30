// Local dependencies
import style from '../styles/components/Footer.module.scss';
import {FOOTER_CONTENT} from '../constants';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>{FOOTER_CONTENT}</p>
    </footer>
  )
}