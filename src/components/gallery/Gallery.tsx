import Image from 'next/image';
import styles from './Gallery.module.css';
import chicago from '../../../public/chicago.jpg';
import newYork from '../../../public/new-york.jpg';
import sicilia from '../../../public/sicilia.jpg';
import paris from '../../../public/paris.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Container, Heading } from '../ui';

export const Gallery = ({}) => {
  return (
    <Container>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Heading text='Галерея фотографий' />
          <p className={styles.paragraph}>
            Наши фотографии - это лучший способ узнать о нашем клубе и игре
            "Мафия". Мы с удовольствием делимся своими снимками, чтобы показать,
            как мы проводим время, играя в игру, и чтобы познакомиться с нашими
            участниками. Вы можете увидеть фотографии на нашем сайте и
            ознакомиться с нашими последними играми.
          </p>
        </div>
        <div className={styles.item}>
          <Image
            alt='sicilia'
            src={sicilia}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.item}>
          <Image
            alt='paris'
            src={paris}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.item}>
          <Image
            alt='newYork'
            src={newYork}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.item}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            className={styles.swiper}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className={styles.swiper}>
                <Image
                  alt='chicago'
                  src={chicago}
                  placeholder='blur'
                  unoptimized
                  quality={100}
                  style={{
                    height: '100%',
                    width: 'auto',
                  }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <Image
                  alt='newYork'
                  src={newYork}
                  placeholder='blur'
                  unoptimized
                  quality={100}
                  className={styles.swiper}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <Image
                  alt='sicilia'
                  src={sicilia}
                  placeholder='blur'
                  unoptimized
                  quality={100}
                  className={styles.swiper}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <Image
                  alt='paris'
                  src={paris}
                  placeholder='blur'
                  unoptimized
                  quality={100}
                  className={styles.swiper}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <Image
                  alt='paris'
                  src={paris}
                  placeholder='blur'
                  unoptimized
                  quality={100}
                  className={styles.swiper}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.item}>
          <Image
            alt='cars'
            src={chicago}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </Container>
  );
};
