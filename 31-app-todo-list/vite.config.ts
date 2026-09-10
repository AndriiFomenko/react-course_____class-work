import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const jsonDiskDbPlugin = (): Plugin => ({
  name: 'json-disk-db',
  configureServer(server) {
    const dbPath = path.resolve(import.meta.dirname, './src/data/todos.json')
    const mockPath = path.resolve(import.meta.dirname, './src/data/mock-todos.json')

    server.middlewares.use((req, res, next) => {
      // Ініціалізація файлу бази даних на диску
      if (!fs.existsSync(dbPath)) {
        if (fs.existsSync(mockPath)) {
          fs.copyFileSync(mockPath, dbPath)
        } else {
          fs.writeFileSync(dbPath, '[]', 'utf-8')
        }
      }

      if (req.url === '/api/todos' && req.method === 'GET') {
        const content = fs.readFileSync(dbPath, 'utf-8')
        res.setHeader('Content-Type', 'application/json')
        res.end(content)
        return
      }

      if (req.url === '/api/todos' && req.method === 'POST') {
        let body = ''
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString()
        })
        req.on('end', () => {
          fs.writeFileSync(dbPath, body, 'utf-8')
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true }))
        })
        return
      }

      if (req.url === '/api/todos/restore' && req.method === 'POST') {
        const defaultData = fs.readFileSync(mockPath, 'utf-8')
        fs.writeFileSync(dbPath, defaultData, 'utf-8')
        res.setHeader('Content-Type', 'application/json')
        res.end(defaultData)
        return
      }

      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsonDiskDbPlugin()]
})
