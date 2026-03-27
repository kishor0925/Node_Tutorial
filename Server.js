const http = require('http');
const fs = require('fs');
const PORT = 3000;
const app = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/plain');
   fs.readFile('./data/index.html', (err, data) => {
      if(err){
         console.log(err)
      }
      else{
         res.write(data);
         res.end()
      }
   })
   // res.end()
})
 

app.listen(PORT)