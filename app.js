const http = require('http');

const {form} = require('./Html');
const BodyParser = require('./BodyParser');

const server = http.createServer(async (req,res)=>{

    const url = req.url;
    const method = req.method;
    let body = {};

    try {
        body = await BodyParser(req);
    } catch (error) {
        
    }
    

    if(url === '/'){
        res.setHeader('content-type','text/html');
        res.write(form);
        res.end();
    }else if(url === '/message' && method === 'POST'){
        console.log(body)
        res.statusCode = 302; //302 means redirect
        res.setHeader('Location','/'); //to redirect the user to the home 
        res.end();
    }

    

});

server.listen(3000,()=>{
    console.log('started');
})

