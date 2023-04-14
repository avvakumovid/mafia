import styles from './Heading.module.css';

interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps) => {
  return <h2 className={styles.heading}>{text}</h2>;
};
