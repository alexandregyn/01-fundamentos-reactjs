import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({comment, onDeleteComment}) {

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/alexandregyn.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorEndTime}>
              <strong>Alexandre Morais</strong>
              <time title='11 de Maio às 08:13h' 
                dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{ comment }</p>
        </div>

        <footer>
          <button >
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}