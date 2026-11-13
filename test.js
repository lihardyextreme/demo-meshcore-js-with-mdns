(async function() {
  
const MDNSClient = require('mdns-nodejs-magic');
const mdnsClient = new MDNSClient();

let meshcoreConnection

mdnsClient.init('_meshcore._tcp.local', (hostname, ip, port) => {
  console.log('Found service:', { hostname, ip, port });
  if(!meshcoreConnection)
    meshcoreConnection = setup(ip,port)
  else
    console.log("already connected")
}, (packet) => {
  //console.log('Packet received:', packet.isResponse);
});


async function setup(ip,port) {
  const { TCPConnection } = require("@liamcottle/meshcore.js")
  const connection = new TCPConnection(ip, port);
  connection.on("connected", async () => {
    console.log("connected!");
    const contacts = await connection.getContacts();
    for(const contact of contacts) {
        console.log(`Contact: ${contact.advName}`);
    }
    connection.close();
  });
  await connection.connect();
  return connection
}

})()

