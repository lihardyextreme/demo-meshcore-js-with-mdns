(async function() {
  
const MDNSClient = require('mdns-nodejs-magic');
const mdnsClient = new MDNSClient();

mdnsClient.init('_meshcore._tcp.local', async (hostname, ip, port) => {
  console.log('Found service:', { hostname, ip, port });
  await connectAndListContacts(ip,port)
});


async function connectAndListContacts(ip,port) {
  const { TCPConnection } = require("@liamcottle/meshcore.js")
  const connection = new TCPConnection(ip, port);
  connection.on("connected", async () => {
    console.log("-> connected to",ip,port);
    const contacts = await connection.getContacts();
    for(const contact of contacts) {
        console.log(`Contact: ${contact.advName}`);
    }
    connection.close();
    console.log("<- disconnected from",ip,port);
  });
  await connection.connect();
  return connection
}

})()

