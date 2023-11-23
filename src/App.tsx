// Components
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

// Interface
import { Post, PostType } from "./components/Post/Post";

// CSS Imports
import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ArchimedesRocha.png',
      name: 'Archimedes Rocha',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto que fiz no Curso Ignite da Rocketseat. O projeto simula um feed 🚀' },

      { type: 'link', content: '👉 ArchimedesRocha/Ignite-Feed' }
    ],
    publishedAt: new Date('2023-10-23 15:06:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/josefirmino.png',
      name: 'José Firmino',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Mais que semanaa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto que fiz no Curso Ignite da Rocketseat. O projeto simula um ToDo List 🚀' },

      { type: 'link', content: '👉 josefirmino/Ignite-ToDoList' }
    ],
    publishedAt: new Date('2023-10-24 11:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
