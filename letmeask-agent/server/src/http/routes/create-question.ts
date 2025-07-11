import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '../../database/connection.ts'
import { schema } from '../../database/schema/index.ts'

const createQuestionSchema = {
  schema: {
    body: z.object({
      question: z.string().min(1),
    }),
    params: z.object({
      roomId: z.string(),
    }),
  },
}

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/questions',
    createQuestionSchema,
    async (request, reply) => {
      const { roomId } = request.params
      const { question } = request.body

      const result = await db
        .insert(schema.questions)
        .values({
          roomId,
          question,
        })
        .returning()

      const insertedQuestion = result[0]

      if (!insertedQuestion) {
        throw new Error('Failed to create a new question')
      }

      return reply.status(201).send({ questionId: insertedQuestion.id })
    }
  )
}
