const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { UserSeeder } = require("./UserSeeder");

async function main() {
  try {
    await UserSeeder();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
