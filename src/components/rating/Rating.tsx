import styles from './Rating.module.css';
import Image from 'next/image';
import avatar from '../../../public/ivan.jpg';
import { Container, Heading } from '../ui';

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
        <li className={styles.item}>
          <span className={styles.position}>4</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Рома</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>4</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>4</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Настя</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>4</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>6</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Анна</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>3</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>6</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Крис</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>3</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>6</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Крис</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>3</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>8</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Никита</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>2</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>8</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>???</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>2</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>10</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Эдгар</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>1</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>10</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Маша</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>1</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>10</span>
          <div className={styles.listimage}></div>
          <div className={styles.listname}>
            <span>Степан</span>
            <a href='#'>-</a>
          </div>
          <div className={styles.score}>1</div>
        </li>
        <li className={styles.item}>
          <span className={styles.position}>10</span>
          <Image className={styles.listimage} alt='intro' src={avatar} />
          <div className={styles.listname}>
            <span>Иван</span>
            <a href='#'>@avvakumovid</a>
          </div>
          <div className={styles.score}>1</div>
        </li>
      </ul>
    </Container>
  );
};
