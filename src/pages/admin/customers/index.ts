import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../functions/prisma'

export const get: RequestHandler = async () => {
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      projects: {
        select: { name: true }
      }
    }
  })

  return {
    body: {
      customers
    }
  }
}
