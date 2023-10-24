import styles from './Avatar.module.css'

export function Avatar({ withoutBorder, src }) {
  return (
    <img className={withoutBorder ? styles.avatar : styles.avatarWithBorder} src={src} />
  )
}