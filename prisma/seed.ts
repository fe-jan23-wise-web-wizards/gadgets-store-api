import { Prisma, PrismaClient } from '@prisma/client';
import allAccessories from '../api/accessories.json';
import allPhones from '../api/phones.json';
import allProducts from '../api/products.json';
import allTablets from '../api/tablets.json';

const prisma = new PrismaClient();
const productsData: Prisma.ProductCreateInput[] = allProducts;
const phonesData: Prisma.PhoneCreateInput[] = allPhones;
const accessoriesData: Prisma.AccessoryCreateInput[] = allAccessories;
const tabletsData: Prisma.TabletCreateInput[] = allTablets;

async function main() {
  console.log(`Start seeding ...`);
  for (const p of productsData) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.itemId}`);
  }

  for (const phoneDetails of phonesData) {
    const phone = await prisma.phone.create({
      data: phoneDetails,
    });
    console.log(`Created phone with id: ${phone.id}`);
  }

  for (const tabletDetails of tabletsData) {
    const tablet = await prisma.tablet.create({
      data: tabletDetails,
    });
    console.log(`Created tablet with id: ${tablet.id}`);
  }

  for (const accessoryDetails of accessoriesData) {
    const accessory = await prisma.accessory.create({
      data: accessoryDetails,
    });
    
    console.log(`Created accessory with id: ${accessory.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
