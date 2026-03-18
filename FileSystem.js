//Fs - File System 

const fs = require('fs');

//mkdir - make directory

//create folder 

if(fs.existsSync('./data')){
    console.log('Folder is alredy Created')
}
else
{
fs.mkdir('./data' , (err) => {
    console.log(err.message);
}) 
}

//Write File 

fs.writeFile('./data/file.txt' , 'Hi Hi Hi Kishor m', (err) => {
    if(err){
        console.log(err.message);
    }
    else
    {
        console.log('File Written')
    }
});


//Read File 


if(fs.existsSync('./data/file.txt')){

    fs.readFile('./data/file.txt', (err, data) => {
    if(err){
        console.log(err.message)
    }
    else{
        console.log(data.toString())
    }
 })
}

//Delete file 

if(fs.existsSync('./data/file.txt')){
    fs.unlink('./data/file.txt' , (err) =>{ 
        if(err)
        {
            console.log(err.message);
        }
        else
        {
            console.log('File Deleted succesfully');
        }
    })
}

//Delete folder 

if(fs.existsSync('./data')){
    fs.rmdir('./data' , (err) => {
        if(err){
            console.log(err.message)
        }
        else
        {
            console.log('Folder Deleted');
        }
    })
}