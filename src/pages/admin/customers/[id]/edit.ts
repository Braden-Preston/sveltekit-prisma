import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../../../../functions/prisma'

export const get: RequestHandler = async ({ params }) => {
  const customerId = +params.id

  let customer = await prisma.customer.findUnique({
    where: { id: customerId }
  })

  return {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
    body: { customer }
  }
}

export const patch: RequestHandler = async ({ request, params }) => {
  let id = +params.id
  let data = await request.formData()
  let name = String(data.get('name'))
  let email = String(data.get('email'))

  console.log('bad stuff!', name, email)

  return prisma.customer
    .update({
      where: { id: id },
      data: { name, email }
    })
    .catch(e => {
      console.log(e)
      let errors = {
        name: 'Name is not unique!',
        email: 'Email does not exist!'
      }
      return {
        status: 400,
        body: { errors }
      }
    })
    .then(customer => {
      return {
        headers: {
          'Content-Type': 'application/json',
          location: '/admin/customers/2'
        },
        status: 303,
        body: { customer }
      }
    })
}
