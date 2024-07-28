const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function UserSeeder() {
  const password = await bcrypt.hash("password", 10);
  console.log(password);
  console.log("User seeding started...");
}

module.exports = { UserSeeder };
