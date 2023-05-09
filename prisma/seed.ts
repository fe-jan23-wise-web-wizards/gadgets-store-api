import { PrismaClient, Prisma } from '@prisma/client';
import allPhones from '../api/phones.json';
import allProducts from '../api/products.json';

const prisma = new PrismaClient();
const productsData: Prisma.ProductCreateInput[] = allProducts;
const phonesData: Prisma.PhoneCreateInput[] = allPhones;

async function main() {
  console.log(`Start seeding ...`);
  for (const p of productsData) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }

  for (const p of phonesData) {
    const phone = await prisma.phone.create({
      data: p,
    });
    console.log(`Created phone with id: ${phone.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
