// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  conn.on("data", () => {
    console.log("Successfully connected to game server")
  });

  conn.on("data", (messageFromTheServer) => {
    console.log(messageFromTheServer);
  });

  conn.on("connect", () => {
    conn.write("Name: LIZ");
  });

  // conn.on("connect", () => {
  // setInterval(() => {
  //     conn.write("Move: up");
  //   }, 1000);
  // });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };