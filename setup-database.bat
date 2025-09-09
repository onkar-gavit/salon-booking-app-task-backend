@echo off
echo Setting up database tables and seeding data...
cd /d "c:\Users\Asus\Desktop\Assignment project\salon-app-Backend"

echo Step 1: Running Prisma migrations to create tables...
npx prisma migrate deploy

echo Step 2: Seeding the database with sample services...
cd "src\services\services-list"
npm run seed

echo Database setup completed!
pause
