const fs = require('fs');

const readstream = fs.createReadStream('./docs/HugeFile.txt', { encoding: 'utf-8' });
const writestream = fs.createWriteStream('./docs/HugeFiles.txt');

readstream.on('data', (chunk) => {
    writestream.write(chunk);
});

readstream.on('end', () => {
    console.log('File copied successfully!');
});