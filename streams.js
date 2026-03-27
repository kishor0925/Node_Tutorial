const fs = require('fs');


// fs.writeFile('./data/file.txt' , 'Hi HI HI HI HI IHI HI' , (err) => {
//     if(err){
//         console.log(err)
//     }
//     else
//     {
//         console.log('File Written');
//     }
// })

const readstream = fs.createReadStream('./data/file.txt', { encoding: 'utf-8' });
// const writestream = fs.createWriteStream('./docs/HugeFiles.txt');

readstream.on('data', (chunk) => {
    console.log(chunk)
});

// readstream.on('end', () => {
//     console.log('File copied successfully!');
// });