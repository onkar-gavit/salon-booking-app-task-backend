@echo off
echo Running seed script for services...
cd /d "c:\Users\Asus\Desktop\Assignment project\salon-app-Backend\src\services\services-list"
node -r ts-node/register seed.ts
pause
