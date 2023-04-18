import styles from './Rating.module.css';
import Image from 'next/image';
import avatar from '../../../public/ivan.jpg';
import { Container, Heading } from '../ui';
import { list } from '../../../data';
import { Item } from './item';

export const Rating = () => {
  return (
    <Container className={styles.rating}>
      <Heading text='Турнирная таблица' />
      {/*
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.image}></div>
          <div className={styles.name}>
            <span>Даша - 6</span>
            <a href='#'>-</a>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.image}></div>
          <div className={styles.name}>
            <span>Екатерина - 6</span>
            <a href='#'>-</a>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.image}></div>
          <div className={styles.name}>
            <span>Алексей - 5</span>
            <a href='#'>-</a>
          </div>
        </div>
      </div>*/}
      <div className={styles.heading}>
        <span>№</span>
        <span>Имя</span>
        <span>Очки</span>
      </div>
      <ul className={styles.list}>
        {list
          .sort((a, b) => b.score - a.score)
          .map(({ id, ...player }, index) => (
            <Item key={id} {...player} position={index + 1} />
          ))}
      </ul>
    </Container>
  );
};
