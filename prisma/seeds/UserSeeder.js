const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function UserSeeder() {
  console.log("%c User seeding started...", "color:blue;");
  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const name = `${firstName} ${lastName}`;
    const username = `${firstName}${lastName[0]}`.toLocaleLowerCase();
    const password = bcrypt.hash(`password${i}`, 10);
    const bio = faker.person.bio();
    await prisma.user.upsert({
      where: { username },
      update: {},
      create: { name, username, bio, password },
    });
  }
  console.log("%c User seeding was done.", "color:green;");
}

module.exports = { UserSeeder };
