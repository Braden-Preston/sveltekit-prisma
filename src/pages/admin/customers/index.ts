import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../functions/prisma'

const rest = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const get: RequestHandler = async () => {
  // await rest(2000)

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

  if (!customers) {
    return { status: 400 }
  }

  return {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
    body: { customers }
  }
}

export const post: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const name = String(form.get('name'))
  const email = String(form.get('email'))

  await prisma.customer.create({
    data: {
      name: name,
      email: email
    }
  })

  return {}
}

export const del: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const customerId = +form.get('id')

  await prisma.customer.delete({ where: { id: customerId } })

  return {
    status: 303,
    headers: { location: '/admin' }
  }
}
