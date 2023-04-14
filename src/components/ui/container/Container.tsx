import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.css';

export const Container: FC = ({ children }: PropsWithChildren) => {
  return <section className={styles.container}>{children}</section>;
};
