import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment({ content }) {
   return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/94193822?v=4" alt="" />
      
      <div className={styles.commentBox}>
         <div className={styles.commentContent}>
            <header>
               <div className={styles.authorAndTime}>
                  <strong>Fabricio Dantas</strong>
                  <time title='11 de Maio às 13:54h' dateTime='2023-03-21 13:53:40'>Cerca de 1h atrás</time>
               </div>
               
               <button title="Deletar comentário">
                  <Trash size={24} />
               </button>
            </header>

            <p>{content}</p>
         </div>

         <footer>
            <button>
               <ThumbsUp />
               Aplaudir <span>20</span>
            </button>
         </footer>
      </div>


    </div>
    
   )
}