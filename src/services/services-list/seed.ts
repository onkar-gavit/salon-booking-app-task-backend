import { PrismaClient } from '../../../libs/generated/client';

const prisma = new PrismaClient();

async function seedServices() {
  console.log('Seeding services...');

  // Sample business ID - replace with actual business ID when testing
  const businessId = 'sample-business-id';

  const services = [
    {
      businessId,
      name: 'Haircut',
      description: 'Professional haircut service',
      duration: 30,
      price: 25.00,
      isActive: true,
    },
    {
      businessId,
      name: 'Hair Wash & Blow Dry',
      description: 'Complete hair washing and styling',
      duration: 45,
      price: 35.00,
      isActive: true,
    },
    {
      businessId,
      name: 'Beard Trim',
      description: 'Professional beard trimming and shaping',
      duration: 20,
      price: 15.00,
      isActive: true,
    },
    {
      businessId,
      name: 'Hair Color',
      description: 'Full hair coloring service',
      duration: 90,
      price: 75.00,
      isActive: true,
    },
    {
      businessId,
      name: 'Facial Treatment',
      description: 'Relaxing facial treatment',
      duration: 60,
      price: 50.00,
      isActive: true,
    }
  ];

  for (const service of services) {
    try {
      const existingService = await prisma.service.findFirst({
        where: {
          businessId: service.businessId,
          name: service.name,
        },
      });

      if (!existingService) {
        await prisma.service.create({
          data: service,
        });
        console.log(`Created service: ${service.name}`);
      } else {
        console.log(`Service already exists: ${service.name}`);
      }
    } catch (error) {
      console.error(`Failed to create service: ${service.name}`, error);
    }
  }

  console.log('Seeding completed!');
}

seedServices()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
