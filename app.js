const http = require('http');

const server = http.createServer((req,res)=>{

    res.setHeader('content-type','text/html');
    res.write('<h1>Hello</h1>');
    res.write('<p>Hello</p>');
    res.end();
    
});

server.listen(3000,()=>{
    console.log('started');
})

