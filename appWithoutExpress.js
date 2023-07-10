const http= require('http');
const fs= require('fs');

// inluding files

const script= fs.readFileSync('./navbar_withoutExpress/scripts.js');
const homePage= fs.readFileSync('./navbar_withoutExpress/index.html');
const homeStyle= fs.readFileSync('./navbar_withoutExpress/style.css');

// const server= http.createServer();
// creating with socket without callback
// server.on("connection",(socket)=>{
//     console.log("new connection established .."+socket.localPort);
// });

// creating with callback

const server= http.createServer((req, res)=>{
    
    console.log(req.url);
    if (req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage);
        res.end();
    }
    if (req.url === '/scripts.js'){
        res.writeHead(200,{'content-type':'text/js'})
        res.write(script);
        res.end();
    }
    if (req.url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle);
        res.end();
    }
});

server.listen(3000);
console.log("listening connection");