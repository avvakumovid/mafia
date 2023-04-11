import Head from 'next/head';
import Image from 'next/image';
import builds from '../../public/builds.png';
import cars from '../../public/cars.png';
import bridge from '../../public/bridge.png';
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
          <div className='layer layers__base'>
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
            />
          </div>
          <div className='layer layers__middle'>
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
            />
          </div>
          <div className='layer layers__front'>
            <Image
              alt='cars'
              src={cars}
              placeholder='blur'
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

      <article className='main-article'>
        <div className='main-article__content'>
          <h2 className='main-article__header'>To be continued</h2>
          <p className='main-article__paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            expedita eos consequuntur repellat dolorum soluta sapiente ipsam
            culpa iusto doloremque qui perferendis est distinctio rem
            repudiandae eius maiores cumque, harum voluptatum enim!
          </p>
          <div className='copy'>© Avvakumovid</div>
        </div>
      </article>
    </>
  );
}
