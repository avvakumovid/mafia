import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Gallery } from '@/components/gallery';
import { Location } from '@/components/location';
import { Footer } from '@/components/footer';
import { Rating } from '@/components/rating';
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
      <Header />
      <Intro />
      <Gallery />
      <Rating />
      <Location />
      <Footer />
    </>
  );
}
