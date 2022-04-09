import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../functions/prisma'

export const post: RequestHandler = async ({ request, params }) => {
  const data = await request.formData()
  const name = String(data.get('name'))
  const email = String(data.get('email'))

  try {
    await prisma.customer.create({
      data: { name, email }
    })

    return {
      status: 303,
      headers: {
        location: `/admin/customers`
      }
    }
  } catch (error) {
    return {
      status: 400,
      body: {
        errors: [{ path: 'email', value: 'email is not unique' }]
      }
    }
  }
}
