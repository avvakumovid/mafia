import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return (
    <section className={`${styles.container} ${className}`}>{children}</section>
  );
};
