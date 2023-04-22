import {
  DetailedHTMLProps,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  src: string;
}

export const VideoPlayer = ({ src, ...rest }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      {...rest}
      controls
      id={src}
      ref={videoRef}
      onPlay={e => {
        console.log('ss');
        const videos = document.querySelectorAll('video');
        videos.forEach(v => {
          if (v !== e.target) {
            v.pause();
          }
        });
      }}
    >
      <source src={src} type='video/mp4' />
    </video>
  );
};
