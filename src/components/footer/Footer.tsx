import styles from './Footer.module.css';
import Image from 'next/image';
import tg from '../../../public/telegram.svg';
import inst from '../../../public/instagram.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.heading}>Контакты</h3>
        <div className={styles.left}>
          <span className={styles.link}>
            <Image width={40} height={40} alt='telegram' src={tg} />
            <a href='https://t.me/+Ekwb-q5ZEAJhZDg6' target='_blank'>
              Mafia Novaya Riga
            </a>
          </span>
          <span className={styles.link}>
            <Image width={40} height={40} alt='instagram' src={inst} />
            <a
              href='https://www.instagram.com/mafia_novaya_riga/'
              target='_blank'
            >
              @mafia_novaya_riga
            </a>
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <a className={styles.copyright}>© avvakumovid</a>
      </div>
    </footer>
  );
};
