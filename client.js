const https = require('https');
const fs = require('fs');
const path = require('path');

// Define the server options
const options = {
    hostname: 'localhost',
    port: 4433,
    path: '/',
    method: 'GET',
    rejectUnauthorized: false, // Accept self-signed certificates
};

// Create a request to the server
const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write(d);
    });

    res.on('end', () => {
        console.log('\nTLS Handshake Completed');
    });
});

// Handle handshake and TLS details
req.on('socket', (socket) => {
    socket.on('secureConnect', () => {
        console.log('TLS Handshake Process:');
        console.log(`- Cipher: ${socket.getCipher().name}`);
        console.log(`- Protocol: ${socket.getProtocol()}`);
        console.log(`- Server certificate subject: ${socket.getPeerCertificate().subject.CN}`);
        console.log(`- Server certificate issuer: ${socket.getPeerCertificate().issuer.CN}`);
        console.log(`- Valid from: ${new Date(socket.getPeerCertificate().valid_from)}`);
        console.log(`- Valid to: ${new Date(socket.getPeerCertificate().valid_to)}`);
    });
});

req.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});

req.end();
