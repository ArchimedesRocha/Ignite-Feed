import { ImgHTMLAttributes } from 'react';

// CSS Import
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  withoutBorder?: boolean;
}

export function Avatar({ withoutBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={withoutBorder ? styles.avatar : styles.avatarWithBorder}
      {...props}
    />
  );
}