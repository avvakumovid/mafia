import Image from 'next/image';
import styles from './Gallery.module.css';
import chicago from '../../../public/chicago.jpg';
import newYork from '../../../public/new-york.jpg';
import sicilia from '../../../public/sicilia.jpg';
import paris from '../../../public/paris.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Container, Heading } from '../ui';
import { VideoPlayer } from '../ui/video-player';

export const Gallery = ({}) => {
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
        </div>
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
        </div>
        <div className={styles.item}>
          <VideoPlayer width={'100%'} src='/video/13.mp4' />
        </div>
      </div>
    </Container>
  );
};
