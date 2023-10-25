// CSS Import
import styles from './Avatar.module.css'

// General Imports
import PropTypes from 'prop-types';

Avatar.propTypes = {
  withoutBorder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export function Avatar({ withoutBorder, src }) {
  return (
    <img className={withoutBorder ? styles.avatar : styles.avatarWithBorder} src={src} />
  )
}