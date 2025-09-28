import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

export async function contactRoutes(server) {
  server.post('/contact', async (request, reply) => {
    const parseResult = contactSchema.safeParse(request.body)
    if (!parseResult.success) {
      return reply.code(400).send({ error: 'Invalid input', details: parseResult.error.flatten() })
    }

    const { name, email, message } = parseResult.data

    // TODO: send email or enqueue job; placeholder logs for now
    server.log.info({ name, email, messageLength: message.length }, 'Contact form submission')

    return reply.code(200).send({ ok: true })
  })
}



