// General Imports
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

// CSS Import
import styles from './Comment.module.css'
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }


  return (
    <div className={styles.comment}>
      <Avatar withoutBorder src="https://github.com/josefirmino.png" alt="Foto do perfil do github" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Firmino</strong>
              <time title="24 de Outubro às 09:45h" dateTime="2023-10-24 09:45:18">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}