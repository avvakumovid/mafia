import Image from 'next/image';
import styles from './Intro.module.css';
import { Container, Heading } from '@/components/ui';
import cards from '../../../public/cards.jpg';

export const Intro = ({}) => {
  return (
    <Container className={styles.intro}>
      <Image className={styles.image} alt='intro' src={cards} />
      <div>
        <Heading text='Вступление' />
        <p className={styles.paragraph}>
          Добро пожаловать в клуб "Мафия" - место, где любители настольных игр
          могут собраться вместе, чтобы играть в увлекательную игру "Мафия". Наш
          клуб существует уже много лет и является одним из самых популярных
          мест в городе для проведения игр. Мы организуем регулярные игры и
          турниры, на которых вы можете испытать свои навыки и насладиться
          атмосферой игры.
        </p>
      </div>
    </Container>
  );
};
