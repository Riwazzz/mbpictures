import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

function createTransporterFromEnv() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const secure = process.env.SMTP_SECURE === 'true'

  if (!host || !port || !user || !pass) return null

  return nodemailer.createTransport({
    host,
    port,
    secure: !!secure,
    auth: { user, pass },
  })
}

export async function contactRoutes(server) {
  const transporter = createTransporterFromEnv()

  server.post('/contact', async (request, reply) => {
    const parseResult = contactSchema.safeParse(request.body)
    if (!parseResult.success) {
      return reply.code(400).send({ error: 'Invalid input', details: parseResult.error.flatten() })
    }

    const { name, email, message } = parseResult.data

    server.log.info({ name, email, messageLength: message.length }, 'Contact form submission')

    // If transporter not configured, log and return success (so UX isn't blocked)
    if (!transporter) {
      server.log.warn('SMTP not configured; contact email not sent')
      return reply.code(200).send({ ok: true, emailSent: false })
    }

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.CONTACT_RECIPIENT || 'info@mbpicturescanada.com',
      subject: `Website contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      server.log.info({ messageId: info.messageId }, 'Contact email sent')
      return reply.code(200).send({ ok: true, emailSent: true })
    } catch (err) {
      server.log.error(err, 'Failed to send contact email')
      // Still return 200 to avoid breaking UX, but indicate failure
      return reply.code(200).send({ ok: true, emailSent: false })
    }
  })
}



