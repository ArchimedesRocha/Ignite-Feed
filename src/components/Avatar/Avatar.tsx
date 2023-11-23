// CSS Import
import styles from './Avatar.module.css'

interface AvatarProps {
  withoutBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ withoutBorder, src, alt }: AvatarProps) {
  return (
    <img
      className={withoutBorder ? styles.avatar : styles.avatarWithBorder}
      src={src}
      alt={alt}
    />
  );
}