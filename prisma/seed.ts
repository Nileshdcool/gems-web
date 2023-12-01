import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const pubkey = "0x011";

  // cleanup the existing database
  await prisma.user.delete({ where: { pubkey } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.user.create({
    data: {
      pubkey,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
