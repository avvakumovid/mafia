import Image from 'next/image';
import builds from '../../public/builds.png';
import cars from '../../public/cars.png';
import bridge from '../../public/bridge.png';
import cards from '../../public/cards.jpg';
import ff from '../../public/ivan.jpg';
import chicago from '../../public/chicago.jpg';
import newYork from '../../public/new-york.jpg';
import sicilia from '../../public/sicilia.jpg';
import paris from '../../public/paris.jpg';
import location1 from '../../public/location1.jpg';
import location2 from '../../public/location2.jpg';
import tg from '../../public/telegram.svg';
import inst from '../../public/instagram.svg';

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
      <section className='section'>
        <div className='grid'>
          <div className='grid__item'>
            <h2 className='heading'>Галерея фотографий</h2>
            <p className='grid__paragraph'>
              Наши фотографии - это лучший способ узнать о нашем клубе и игре
              "Мафия". Мы с удовольствием делимся своими снимками, чтобы
              показать, как мы проводим время, играя в игру, и чтобы
              познакомиться с нашими участниками. Вы можете увидеть фотографии
              на нашем сайте и ознакомиться с нашими последними играми.
            </p>
          </div>
          <div className='grid__item'>
            <Image
              alt='cars'
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
          <div className='grid__item'>
            <Image
              alt='cars'
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
          <div className='grid__item'>
            <Image
              alt='cars'
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
          <div className='grid__item'>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              className='grid__swiper'
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className='grid__swiper'>
                  <Image
                    alt='cars'
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
                <div className='grid__swiper'>
                  <Image
                    alt='cars'
                    src={newYork}
                    placeholder='blur'
                    unoptimized
                    quality={100}
                    className='grid__swiper'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='grid__swiper'>
                  <Image
                    alt='cars'
                    src={sicilia}
                    placeholder='blur'
                    unoptimized
                    quality={100}
                    className='grid__swiper'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='grid__swiper'>
                  <Image
                    alt='cars'
                    src={paris}
                    placeholder='blur'
                    unoptimized
                    quality={100}
                    className='grid__swiper'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='grid__swiper'>
                  <Image
                    alt='cars'
                    src={paris}
                    placeholder='blur'
                    unoptimized
                    quality={100}
                    className='grid__swiper'
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='grid__item'>
            <Image
              alt='cars'
              src={ff}
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
      </section>
      <section className='rating section'>
        <h2 className='rating__heading heading'>Турнирная таблица</h2>
        <div className='rating__top'>
          <div className='rating__top-info'>
            <div className='rating__top-image'></div>
            <div className='rating__top-name'>
              <span>Даша - 6</span>
              <a href='#'>-</a>
            </div>
          </div>
          <div className='rating__top-info'>
            <div className='rating__top-image'></div>
            <div className='rating__top-name'>
              <span>Екатерина - 6</span>
              <a href='#'>-</a>
            </div>
          </div>
          <div className='rating__top-info'>
            <div className='rating__top-image'></div>
            <div className='rating__top-name'>
              <span>Алексей - 5</span>
              <a href='#'>-</a>
            </div>
          </div>
        </div>
        <div className='rating__list-heading'>
          <span>№</span>
          <span>Имя</span>
          <span>Очки</span>
        </div>
        <ul className='rating__list'>
          <li className='rating__list-item'>
            <span className='rating__position'>4</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Рома</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>4</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>4</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Настя</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>4</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>6</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Анна</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>3</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>6</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Крис</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>3</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>6</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Крис</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>3</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>8</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Никита</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>2</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>8</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>???</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>2</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>10</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Эдгар</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>1</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>10</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Маша</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>1</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>10</span>
            <div className='rating__list-image'></div>
            <div className='rating__list-name'>
              <span>Степан</span>
              <a href='#'>-</a>
            </div>
            <div className='rating__list-score'>1</div>
          </li>
          <li className='rating__list-item'>
            <span className='rating__position'>10</span>
            <Image className='rating__list-image' alt='intro' src={ff} />
            <div className='rating__list-name'>
              <span>Иван</span>
              <a href='#'>@avvakumovid</a>
            </div>
            <div className='rating__list-score'>1</div>
          </li>
        </ul>
      </section>
      <section className='location section'>
        <h2 className='location__heading heading'>Локации</h2>
        <div className='location__content'>
          <div className='location__item'>
            <h3 className='location__item-heading'>
              Гастробар Хлеб. Вино. Жизнь.
            </h3>
            <div className='location__info'>
              <ul className='location__info-text'>
                <li>
                  <strong>Адрес:</strong>
                  <a
                    className='location__info-value'
                    href='https://yandex.ru/profile/1748208192'
                    target='_blank'
                  >
                    Центральная ул., 27/1, д. Покровское (ТЦ Покровский)
                  </a>
                </li>
                <li>
                  <strong>Сайт:</strong>
                  <a
                    className='location__info-value'
                    href='http://pokrovskytk.ru/place/gastrobar'
                    target='_blank'
                  >
                    pokrovskytk.ru
                  </a>
                </li>
                <li>
                  <strong>Время работы:</strong>
                  <span className='location__info-value'>
                    ежедневно, 08:00–23:00
                  </span>
                </li>
              </ul>
            </div>
            <Image
              className='location__image'
              alt='intro'
              src={location1}
              placeholder='blur'
              unoptimized
              quality={100}
            />
          </div>
          <div className='location__item'>
            <h3 className='location__item-heading'>Rusalka</h3>
            <div className='location__info'>
              <ul className='location__info-text'>
                <li>
                  <strong>Адрес:</strong>
                  <a
                    className='location__info-value'
                    href='https://yandex.ru/profile/62326200017'
                    target='_blank'
                  >
                    115, стр. 5, д. Новинки
                  </a>
                </li>
                <li>
                  <strong>Сайт:</strong>
                  <a
                    className='location__info-value'
                    href='https://rusalkabistro.ru/'
                    target='_blank'
                  >
                    rusalkabistro.ru
                  </a>
                </li>
                <li>
                  <strong>Время работы:</strong>{' '}
                  <span className='location__info-value'>
                    пн-пт 09:00–00:00; сб,вс 10:00–00:00
                  </span>
                </li>
              </ul>
            </div>
            <Image
              className='location__image'
              alt='intro'
              src={location2}
              placeholder='blur'
              unoptimized
              quality={100}
            />
          </div>
        </div>
      </section>
      <footer className='footer section'>
        <div>
          <h3 className='footer__heading'>Контакты</h3>
          <div className='footer__left'>
            <span className='footer__link'>
              <Image width={40} height={40} alt='telegram' src={tg} />
              <a href='https://t.me/+Ekwb-q5ZEAJhZDg6' target='_blank'>
                Mafia Novaya Riga
              </a>
            </span>
            <span className='footer__link'>
              <Image width={40} height={40} alt='instagram' src={inst} />
              <a
                href='https://www.instagram.com/mafia_novaya_riga/'
                target='_blank'
              >
                @mafia_novaya_riga
              </a>
            </span>
          </div>
        </div>
        <div className='footer__right'>
          <a className='copyright'>© avvakumovid</a>
        </div>
      </footer>
    </>
  );
}
