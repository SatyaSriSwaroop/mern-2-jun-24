console.log("hello");

const http = require("http");

const server = http.createServer(() => {
    console.log("request recieved");
});

server.listen(8082, () => {
    console.log("server is listening now...");
});