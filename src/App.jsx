import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fabricio0101.png',
      name: 'Fabricio Dantas',
      role: 'Front-End Developer' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: <a href=''>jane.design/doctorcare</a> },
    ],
    publishedAt: new Date('2023-03-22 09:55:30'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AdsonNascimento.png',
      name: 'Adson Nascimento',
      role: 'Front-End Developer' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: <a href=''>jane.design/doctorcare</a> },
    ],
    publishedAt: new Date('2023-03-20 09:55:30'),
  },
  
];

export function App() {
  return (

  <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
  
  </div>

  )
}

export default App
