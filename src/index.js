var http = require("http");
const getUser = require("./prova");

const str = getUser("Riccardo", 29);

console.log(str);

//create a server object:
http
  .createServer(function (req, res) {
    res.write("test"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
