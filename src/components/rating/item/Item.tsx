import styles from './Item.module.css';
import Image, { StaticImageData } from 'next/image';

interface ItemProps {
  position: number;
  name: string;
  score: number;
  avatar?: StaticImageData;
  contact?: string;
}

export const Item = ({ name, score, avatar, position, contact }: ItemProps) => {
  return (
    <li className={styles.item}>
      <span className={styles.position}>{position}</span>
      {avatar ? (
        <Image className={styles.image} alt='intro' src={avatar} />
      ) : (
        <div className={styles.image}></div>
      )}
      <div className={styles.name}>
        <span>{name}</span>
        <a href='#'>{contact}</a>
      </div>
      <div className={styles.score}>{score}</div>
    </li>
  );
};
