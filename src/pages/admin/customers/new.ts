import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../functions/prisma'

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const name = String(form.get('name'))
  const email = String(form.get('email'))

  try {
    await prisma.customer.create({
      data: {
        name: name,
        email: email
      }
    })  
  } catch (error) {
    await prisma.customer.create({
      data: {
        name: name,
        email: email
      }
    })
  }

  return {}
}
