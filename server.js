const https = require('https');
const fs = require('fs');
const path = require('path');

// Load the server's private key and certificate
const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt'))
};

// Create a simple HTTPS server
https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello Secure World, this connection is encrypted with TLS!\n');
}).listen(4433, () => {
    console.log('TLS server running on https://localhost:4433');
});
