import { useState, useEffect } from 'react'
import './index.css' // Ensure styles are applied if not globally imported

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800)) // Slightly faster for better UX
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12') // Limit to 12 for better visual grid

        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data: Post[] = await response.json()
        setPosts(data)
      } catch (error) {
        setError('Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="title">Neon Posts</h1>
        <p className="subtitle">Exploration of Glassmorphism & UI Dynamics</p>
      </header>

      {loading && (
        <div className="loading-container" role="status">
          <div className="loader"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <ul className="posts-grid">
          {posts.map((post, index) => (
            <li
              key={post.id}
              className="post-card"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <span className="card-id">#{post.id.toString().padStart(3, '0')}</span>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-body">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
