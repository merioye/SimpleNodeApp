const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const data = fs.readFileSync('index.html', 'utf-8');
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }else{
        res.end('Page Not Found!');
    }
});

server.listen(8000, ()=>{
    console.log('listening');
});