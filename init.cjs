const fs = require('fs');
const path = require('path');

const [, , instanceName] = process.argv;

if (!instanceName) {
  console.log('Usage: $0 <instance_name>');
  process.exit(1);
}

console.log(`Replacing <instance-name> by "{instanceName}" in files...`);

const files = ['./.github/workflows/deploy.yml', './README-original.md'];

for (const file of files) {
  const filepath = path.join(__dirname, file);
  const content = fs.readFileSync(filepath, null, 'utf8').toString();
  
  fs.writeFileSync(filepath, content.replace(/<instance-name>/g, instanceName));
}

console.log('Replacing README');
fs.unlinkSync('./README.md');
fs.copyFileSync('./README-original.md', './README.md');

console.log("🎉 You're all done, congratulations");
