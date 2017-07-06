const fs = require('fs');
const files = fs.readdirSync(`${__dirname}`);

files.filter((filename) => filename.includes('.spec.js'))
  .map((filename) => require(`${__dirname}/${filename}`));
