import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()

  await prisma.user.create({
    data: {
      name: 'Josh',
      email: 'josh@email.com',
      goals: {
        create: {
          title: 'Eat all the cheese',
          category: 'personal'
        }
      }
    }
  })

  const allUsers = await prisma.user.findMany({
    include: {
      goals: true,
    },
  })
  console.dir(allUsers, { depth: null })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })