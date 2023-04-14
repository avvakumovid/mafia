import Image from 'next/image';
import cars from '../../../public/cars.png';
import bridge from '../../../public/bridge.png';
import builds from '../../../public/builds.png';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.layers}>
        <div className={styles.header}>
          <div className={styles.caption}>Welcome to</div>
          <div className={styles.title}>MAFIA NOVAYA RIGA</div>
        </div>
        <div className={`${styles.layer} ${styles.bridge}`}>
          <Image
            alt='bridge'
            src={bridge}
            placeholder='blur'
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
            unoptimized
          />
        </div>
        <div className={`${styles.layer} ${styles.builds}`}>
          <Image
            alt='builds'
            src={builds}
            placeholder='blur'
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
            unoptimized
          />
        </div>
        <div className={`${styles.layer} ${styles.cars}`}>
          <Image
            alt='cars'
            src={cars}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </header>
  );
};
