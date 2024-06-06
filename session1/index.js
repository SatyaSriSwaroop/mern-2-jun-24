console.log("hello");

const http = require("http");
const currenciesData = require("../currencies.json");
const PORT = 8082;

const server = http.createServer((request, response) => {
    // const serverDate = new Date().toLocaleDateString();
    // const serverTime = new Date().toLocaleTimeString();
    // console.log(serverDate, serverTime);

    switch(request.url)
    {
        case "/":
            response.writeHead(200, {"Content-Type": "text/html"})
            .end(`<h1>Currency Database</h1>`)
            break;
        case "/currencies":
            response.writeHead(200, {"Content-Type": "application/json"})
            .end(JSON.stringify(currenciesData.data));
            break;
        default:
            response.writeHead(404, {"Content-Type": "application/json"})
            .end(`NOT FOUND`);
            break;   
    }

    // if(request.method === "GET" && request.url === "/products")
    //     {
    
    // response.writeHead(400, {"Content-Type": "text/plain"});
    // response.writeHead(200, {"Content-Type": "text/html"});
    // response.writeHead(200, {"Content-Type": "application/json"});
    // response.write('hello from server');
    // response.write(`${serverDate} ${serverTime}`);
    // const serverData = {
    //     date: serverDate,
    //     time: serverTime
    // }
    // response.write(JSON.stringify(serverData));
    // response.write(`<h1>hello</h1>`);
    // response.end();
// }
// else{
//     response.writeHead(404);
//     response.end();
// }
});

server.listen(8082, () => {
    console.log(`server is listening now on ${PORT}`);
});