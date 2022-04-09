import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../../functions/prisma'

export const get: RequestHandler = async ({ params }) => {
  const id = +params.id

  const customer = await prisma.customer.findUnique({
    where: { id }
  })

  if (!customer) {
    return { status: 400 }
  }

  return {
    status: 200,
    body: { customer }
  }
}

export const patch: RequestHandler = async ({ request, params }) => {
  const id = +params.id
  const data = await request.formData()
  const name = String(data.get('name'))
  const email = String(data.get('email'))

  try {
    await prisma.customer.update({
      where: { id },
      data: { name, email }
    })

    return {
      status: 303,
      headers: {
        location: `/admin/customers/${id}`
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
