import { desc, eq } from 'drizzle-orm'
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '../../database/connection.ts'
import { schema } from '../../database/schema/index.ts'

const getRoomQuestionsSchema = {
  schema: {
    params: z.object({
      roomId: z.string(),
    }),
  },
}

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    '/rooms/:roomId/questions',
    getRoomQuestionsSchema,
    async (request) => {
      const { roomId } = request.params

      const roomQuestions = await db
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          answer: schema.questions.answer,
          createdAt: schema.questions.createdAt,
        })
        .from(schema.questions)
        .where(eq(schema.questions.roomId, roomId))
        .orderBy(desc(schema.questions.createdAt))

      return roomQuestions
    }
  )
}
