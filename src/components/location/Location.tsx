import styles from './Location.module.css';
import Image from 'next/image';
import location1 from '../../../public/location1.jpg';
import location2 from '../../../public/location2.jpg';
import { Container } from '../ui';
import { Heading } from './../ui/heading/Heading';

export const Location = () => {
  return (
    <Container className={styles.location}>
      <Heading text='Локации' />
      <div className={styles.content}>
        <div className={styles.item}>
          <h3 className={styles.heading}>Гастробар Хлеб. Вино. Жизнь.</h3>
          <div className={styles.info}>
            <ul className={styles.text}>
              <li>
                <strong>Адрес:</strong>
                <a
                  className={styles.value}
                  href='https://yandex.ru/profile/1748208192'
                  target='_blank'
                >
                  Центральная ул., 27/1, д. Покровское (ТЦ Покровский)
                </a>
              </li>
              <li>
                <strong>Сайт:</strong>
                <a
                  className={styles.value}
                  href='http://pokrovskytk.ru/place/gastrobar'
                  target='_blank'
                >
                  pokrovskytk.ru
                </a>
              </li>
              <li>
                <strong>Время работы:</strong>
                <span className={styles.value}>ежедневно, 08:00–23:00</span>
              </li>
            </ul>
          </div>
          <Image
            className={styles.image}
            alt='intro'
            src={location1}
            placeholder='blur'
            unoptimized
            quality={100}
          />
        </div>
        <div className={styles.item}>
          <h3 className={styles.heading}>Rusalka</h3>
          <div className={styles.info}>
            <ul className={styles.text}>
              <li>
                <strong>Адрес:</strong>
                <a
                  className={styles.value}
                  href='https://yandex.ru/profile/62326200017'
                  target='_blank'
                >
                  115, стр. 5, д. Новинки
                </a>
              </li>
              <li>
                <strong>Сайт:</strong>
                <a
                  className={styles.value}
                  href='https://rusalkabistro.ru/'
                  target='_blank'
                >
                  rusalkabistro.ru
                </a>
              </li>
              <li>
                <strong>Время работы:</strong>
                <span className={styles.value}>
                  пн-пт 09:00–00:00; сб,вс 10:00–00:00
                </span>
              </li>
            </ul>
          </div>
          <Image
            className={styles.image}
            alt='intro'
            src={location2}
            placeholder='blur'
            unoptimized
            quality={100}
          />
        </div>
      </div>
    </Container>
  );
};
