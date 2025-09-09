@echo off
echo Fixing Prisma deployment for Lambda...
cd /d "c:\Users\Asus\Desktop\Assignment project\salon-app-Backend"

echo Step 1: Installing copy-webpack-plugin...
cd "src\services\services-list"
npm install copy-webpack-plugin@11.0.0 --save-dev

echo Step 2: Regenerating Prisma client...
cd /d "c:\Users\Asus\Desktop\Assignment project\salon-app-Backend"
node_modules\.bin\prisma generate

echo Step 3: Building and deploying services-list...
cd "src\services\services-list"
yarn deploy

echo Prisma deployment fix completed!
pause
