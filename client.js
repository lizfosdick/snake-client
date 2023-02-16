// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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