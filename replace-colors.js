const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'app', 'components');

const colorMap = {
  '#1a1a1a': '#2E3523',
  '#1A1A1A': '#2E3523',
  '#0a0a0a': '#4E5B31',
  '#0A0A0A': '#4E5B31',
  '#d4af37': '#C8A96B',
  '#D4AF37': '#C8A96B',
  '#faf8f3': '#F5F1E8',
  '#FAF8F3': '#F5F1E8',
  '#ff6b6b': '#B96F4D',
  '#FF6B6B': '#B96F4D',
  '#4a90e2': '#A8B091',
  '#4A90E2': '#A8B091',
  '#87a878': '#A8B091',
  '#87A878': '#A8B091',
  '#ffc4c4': '#DCCDB8',
  '#FFC4C4': '#DCCDB8',
  '#8b6914': '#8C774E',
  '#8B6914': '#8C774E',
};

function walkDir(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      files = files.concat(walkDir(itemPath));
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(itemPath);
    }
  }
  return files;
}

const allFiles = walkDir(dirPath);

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    if (content.includes(oldColor)) {
      content = content.split(oldColor).join(newColor);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
console.log('Done replacing colors.');
