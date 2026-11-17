# MeshCore JavaScript mDNS Demo

A small Node.js example that discovers MeshCore devices advertising the `_meshcore._tcp.local` service on the local network, connects to a discovered device over TCP, and prints its contact names.

## What it does

1. Listens for MeshCore mDNS service announcements.
2. Logs the discovered hostname, IP address, and port.
3. Connects using [`@liamcottle/meshcore.js`](https://www.npmjs.com/package/@liamcottle/meshcore.js).
4. Retrieves contacts and prints each contact's advertised name.
5. Closes the TCP connection after listing contacts.

This is a minimal demonstration, not a long-running client or a production-ready discovery service.

## Requirements

- Node.js and npm.
- A MeshCore device or service advertising `_meshcore._tcp.local` on your local network.
- Network access that allows multicast DNS (mDNS) discovery and TCP connections to the advertised service.

## Setup and run

Clone the repository, install its dependencies, then run the demo:

```bash
git clone https://github.com/lihardyextreme/demo-meshcore-js-with-mdns.git
cd demo-meshcore-js-with-mdns
npm install
npm test
```

The `npm test` command runs `test.js`. Despite the script name, this currently starts the discovery demo; it is not an automated test suite.

## Example output

Output depends on the devices and contacts available on your network. It will look similar to:

```text
Found service: { hostname: 'meshcore-device.local', ip: '192.168.1.50', port: 5000 }
connected!
Contact: Example Contact
```

## Troubleshooting

- **No service appears:** Confirm the MeshCore device is online and advertising `_meshcore._tcp.local`. Check that your network and host allow mDNS multicast traffic.
- **Discovery works but connection fails:** Verify the advertised IP and port are reachable from the machine running Node.js, and check local firewall or network isolation settings.
- **No contacts are printed:** The connection may have returned an empty contact list, or the device may not have any contacts available.

## Dependencies

- [`@liamcottle/meshcore.js`](https://www.npmjs.com/package/@liamcottle/meshcore.js) — MeshCore TCP client.
- [`mdns-nodejs-magic`](https://github.com/lihardyextreme/mdns-nodejs-magic) — mDNS service discovery.

## License

This project is distributed under the GNU Lesser General Public License v3.0. See [LICENSE](LICENSE).
