const fs = require('fs');
const path = require('path');

// Copy Prisma binaries to the webpack output directory
const sourceDir = path.join(__dirname, '../../../libs/generated/client');
const targetDir = path.join(__dirname, '.webpack/service');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy the entire Prisma client directory
const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Copy Prisma client to libs/generated/client in the webpack output
const prismaTargetDir = path.join(__dirname, '.webpack/service/libs/generated/client');
copyRecursiveSync(sourceDir, prismaTargetDir);

console.log('Prisma binaries copied successfully');
