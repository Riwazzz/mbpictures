import Fastify from 'fastify'
import cors from 'fastify-cors'
import dotenv from 'dotenv'
import { contactRoutes } from './routes/contact.js'

dotenv.config()

const server = Fastify({ logger: true })

// CORS
await server.register(cors, {
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
})

// Health check
server.get('/health', async (_request, _reply) => {
  return { ok: true }
})

// Routes
await server.register(async (instance) => {
  await contactRoutes(instance)
})

const host = process.env.HOST || '0.0.0.0'
const port = Number(process.env.PORT || 3000)

try {
  await server.listen({ host, port })
  server.log.info(`API listening on http://${host}:${port}`)
} catch (err) {
  server.log.error(err)
  process.exit(1)
}


