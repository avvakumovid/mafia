import Image from 'next/image';
import builds from '../../public/builds.png';
import cars from '../../public/cars.png';
import bridge from '../../public/bridge.png';
import cards from '../../public/cards.jpg';
import table from '../../public/table.jpg';
import s from '../../public/174.jpg';
import ff from '../../public/ivan.jpg';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
export default function Home() {
  const handleScroll = () => {
    document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <>
      <header className='main-header'>
        <div className='layers'>
          <div className='layers__header'>
            <div className='layers__caption'>Welcome to</div>
            <div className='layers__title'>MAFIA NOVAYA RIGA</div>
          </div>
          <div className='layer layers__bridge'>
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
          <div className='layer layers__builds'>
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
          <div className='layer layers__cars'>
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
      <section className='section intro'>
        <Image className='intro__image image' alt='intro' src={cards} />
        <div className='intro__content content'>
          <h2 className='intro__header heading'>Вступление</h2>
          <p className='intro__paragraph paragraph'>
            Добро пожаловать в клуб "Мафия" - место, где любители настольных игр
            могут собраться вместе, чтобы играть в увлекательную игру "Мафия".
            Наш клуб существует уже много лет и является одним из самых
            популярных мест в городе для проведения игр. Мы организуем
            регулярные игры и турниры, на которых вы можете испытать свои навыки
            и насладиться атмосферой игры.
          </p>
        </div>
      </section>
      <section className='gallery section'>
        <div className='gallery__content content'>
          <h2 className='gallery__heading heading'>Галерея</h2>
          <p className='gallery__paragraph paragraph'>
            Наши фотографии - это лучший способ узнать о нашем клубе и игре
            "Мафия". Мы с удовольствием делимся своими снимками, чтобы показать,
            как мы проводим время, играя в игру, и чтобы познакомиться с нашими
            участниками. Вы можете увидеть фотографии на нашем сайте и
            ознакомиться с нашими последними играми.
          </p>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Image className='gallery__image' alt='intro' src={cards} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='gallery__image' alt='intro' src={cards} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='gallery__image' alt='intro' src={cards} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='gallery__image' alt='intro' src={cards} />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='gallery__image' alt='intro' src={cards} />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className='location section'>
        <h2 className='location__heading heading'>Локации</h2>
        <div></div>
      </section>
      <div className='container'>
        <div className='box-1'>
          <div className='gallery__heading content'>
            <h2 className='gallery__header heading'>Галерея</h2>
            <p className='gallery__paragraph paragraph'>
              Наши фотографии - это лучший способ узнать о нашем клубе и игре
              "Мафия". Мы с удовольствием делимся своими снимками, чтобы
              показать, как мы проводим время, играя в игру, и чтобы
              познакомиться с нашими участниками. Вы можете увидеть фотографии
              на нашем сайте и ознакомиться с нашими последними играми.
            </p>
          </div>
        </div>
        <div className='box-2'>
          <Image
            alt='cars'
            src={cards}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </div>
        <div className='box-3'>
          <Image
            alt='cars'
            src={cards}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            sizes='100vw'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='box-4'>
          <Image
            alt='cars'
            src={ff}
            placeholder='blur'
            unoptimized
            quality={100}
            fill
            sizes='100vw'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div
        style={{
          width: 500,
          height: 3000,
        }}
      ></div>
    </>
  );
}
