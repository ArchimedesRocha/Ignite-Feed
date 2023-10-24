// General Imports
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';

// CSS Import
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ArchimedesRocha.png" />
          <div className={styles.authorInfo}>
            <strong>Archimedes Rocha</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="23 de Outubro às 20:24h" dateTime="2023-10-23 20:24:32">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a className={styles.authorName} href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}