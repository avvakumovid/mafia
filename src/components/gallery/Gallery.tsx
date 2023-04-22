import Image from 'next/image';
import styles from './Gallery.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Container, Heading } from '../ui';
import { VideoPlayer } from '../ui/video-player';
import { useRef } from 'react';
import left from '../../../public/arrow-left.svg';
import right from '../../../public/arrow-right.svg';

export const Gallery = ({}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Container>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Heading text='Галерея' />
          <p className={styles.paragraph}>
            Наши фотографии и видео - это лучший способ узнать о нашем клубе и
            игре "Мафия". Мы с удовольствием делимся своими снимками, чтобы
            показать, как мы проводим время, играя в игру, и чтобы познакомиться
            с нашими участниками. Вы можете увидеть фотографии на нашем сайте и
            ознакомиться с нашими последними играми.
          </p>
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/4.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer src='/video/1.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/6.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/3.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/5.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/2.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/7.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/8.mp4' />
        </div>{' '}
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/9.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/10.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/11.mp4' />
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/12.mp4' />
        </div>{' '}
        <div className={styles.item}>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={{
              dynamicBullets: true,
            }}
            className={styles.swiper}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className={styles.swiper}>
                <VideoPlayer width={'100%'} src='/video/1.mp4' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <VideoPlayer width={'100%'} src='/video/2.mp4' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <VideoPlayer width={'100%'} src='/video/3.mp4' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <VideoPlayer width={'100%'} src='/video/5.mp4' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper}>
                <VideoPlayer width={'100%'} src='/video/11.mp4' />
              </div>
            </SwiperSlide>
            <div className={styles.prev} ref={navigationPrevRef}>
              <Image width={15} height={15} alt='telegram' src={left} />
            </div>
            <div className={styles.next} ref={navigationNextRef}>
              <Image width={15} height={15} alt='telegram' src={right} />
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};
