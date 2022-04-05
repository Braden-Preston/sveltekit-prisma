import { faker } from '@faker-js/faker'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

faker.seed(Number('svelte is awesome'))

let customerGender = faker.name.gender(true)
let customerFirstName = faker.name.firstName()
let customerLastName = faker.name.lastName()

async function seed() {
  let customers = Array(20).map(() => Math.random())
  console.log(customers)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
