import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  src: string;
}

export const VideoPlayer = ({ src, ...rest }: VideoPlayerProps) => {
  return (
    <video {...rest} controls>
      <source src={src} type='video/mp4' />
    </video>
  );
};
