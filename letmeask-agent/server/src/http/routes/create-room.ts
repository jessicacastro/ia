import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '../../database/connection.ts'
import { schema } from '../../database/schema/index.ts'

const createRoomSchema = {
  schema: {
    body: z.object({
      name: z.string().min(1),
      description: z.string().optional(),
    }),
  },
}

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.post('/rooms', createRoomSchema, async (request, reply) => {
    const { name, description } = request.body

    const result = await db
      .insert(schema.rooms)
      .values({
        name,
        description,
      })
      .returning()

    const insertedRoom = result[0]

    if (!insertedRoom) {
      throw new Error('Failed to create a new room')
    }

    return reply.status(201).send({ roomId: insertedRoom.id })
  })
}
