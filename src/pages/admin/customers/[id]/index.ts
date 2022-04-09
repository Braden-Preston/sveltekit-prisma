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
    headers: { 'Content-Type': 'application/json' },
    status: 200,
    body: { customer }
  }
}

export const del: RequestHandler = async ({ params }) => {
  const id = +params.id

  await prisma.customer.delete({
    where: { id }
  })

  return {
    status: 303,
    headers: { location: '/admin/customers' }
  }
}
