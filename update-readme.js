const fs = require('fs');

const startDate = new Date('2025-05-27'); 
const today = new Date();

const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const months = Math.floor(diffDays / 30.44);
const days = Math.floor(diffDays % 30.44);

let readme = fs.readFileSync('README.md', 'utf8');

const updated = readme.replace(
  /I've been developing for around (.*?)\n/,
  `I've been developing for around ${months} months and ${days} days\n`
);

fs.writeFileSync('README.md', updated);

console.log(`Updated README.md: ${months} months and ${days} days`);
