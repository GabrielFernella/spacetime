import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// Cors utilizado para definir uma URL com permissão para fazer requisições
app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Start server in port http://localhost:3333')
  })
