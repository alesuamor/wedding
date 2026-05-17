const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'app', 'components');

const replaceMap = {
  'rgba(212,175,55': 'rgba(200,169,107',
  'rgba(135,168,120': 'rgba(168,176,145',
  'rgba(255,107,107': 'rgba(185,111,77',
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
  for (const [oldStr, newStr] of Object.entries(replaceMap)) {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
console.log('Done replacing rgba.');
