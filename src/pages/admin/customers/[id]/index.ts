import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../../functions/prisma'

export const get: RequestHandler = async ({ params }) => {
  const customerId = +params.id

  const customer = await prisma.customer.findUnique({
    where: { id: customerId }
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
