import Image from 'next/image';
import builds from '../../public/builds.png';
import cars from '../../public/cars.png';
import bridge from '../../public/bridge.png';
import cards from '../../public/cards.jpg';

import { useEffect } from 'react';

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
      <section className='intro'>
        <Image className='intro__image' alt='intro' src={cards} />
        <div className='intro__content'>
          <h2 className='intro__header'>Вступление</h2>
          <p className='intro__paragraph'>
            Добро пожаловать в клуб "Мафия" - место, где любители настольных игр
            могут собраться вместе, чтобы играть в увлекательную игру "Мафия".
            Наш клуб существует уже много лет и является одним из самых
            популярных мест в городе для проведения игр. Мы организуем
            регулярные игры и турниры, на которых вы можете испытать свои навыки
            и насладиться атмосферой игры.
          </p>
        </div>
      </section>
    </>
  );
}
