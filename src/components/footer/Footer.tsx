import styles from './Footer.module.css';
import Image from 'next/image';
import tg from '../../../public/telegram.svg';
import inst from '../../../public/instagram.svg';
import wa from '../../../public/whatsapp.svg';

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
          <span>Для записи на игру пшите в Whats App</span>
          <span className={styles.link}>
            <Image width={40} height={40} alt='whatsapp' src={wa} />
            <a
              href='https://wa.me/79183073562?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%9C%D0%B0%D1%84%D0%B8%D1%8F!'
              target='_blank'
            >
              +7 918 307-35-62
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
