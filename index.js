// dependecies
const http = require('http');
const url = require('url');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port : 3000,
};

// cretae server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`listing to on port ${app.config.port}`)
    })
}

// handle request and response 
app.handleReqRes = (req, res) => {
    // request handling

    const parsedUrl = url.parse(req.url,true);
   // console.log(parsedUrl)
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    console.log(queryStringObject)
    // reponse handle 
    res.end("Hello Bagladesh")
}

// start the server 
app.createServer();
