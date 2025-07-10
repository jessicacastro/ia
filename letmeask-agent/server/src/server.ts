import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'

const application = fastify().withTypeProvider<ZodTypeProvider>()

application.register(fastifyCors, {
  origin: 'http://localhost:5173', // Adjust the origin as needed
})

application.setSerializerCompiler(serializerCompiler)
application.setValidatorCompiler(validatorCompiler)

application.get('/healthcheck', () => 'OK')

application.register(getRoomsRoute)

application.listen({ port: env.PORT })
