const http=require('http');





// Createing server
const server=http.createServer((req , res)=>{
    console.log("requset ==> " , req)
});


server.listen(3000);