import { useState, useEffect } from 'react'

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
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

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
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
