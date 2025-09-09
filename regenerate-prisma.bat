@echo off
echo Regenerating Prisma client with Lambda binary targets...
cd /d "c:\Users\Asus\Desktop\Assignment project\salon-app-Backend"
node_modules\.bin\prisma generate
echo Prisma client regenerated successfully!
pause
