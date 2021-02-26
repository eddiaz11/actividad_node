const fs= require("fs");
const http= require("http");
const axios = require('axios').default;



const leer= (callback) =>{
    fs.readFile("index.html", (err, data)=>{
        if(err){
            throw err;
        }
        callback(data.toString());
    });
}

http.createServer((req, res)=>{
    leer((data)=>{
        res.end(data)
    });
}).listen(8000);

axios.get('/api/proveedores')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  axios.get('/api/clientes')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });