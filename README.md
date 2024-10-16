# TLS/SSL Handshake Demonstration

### **What is SSL?**

**SSL (Secure Sockets Layer)** is a cryptographic protocol designed to provide secure communication over a computer network. It was developed in the mid-1990s by Netscape to secure internet traffic, especially for web browsers, ensuring data privacy and integrity between a client (like a web browser) and a server. SSL has been deprecated due to known vulnerabilities and is no longer used in modern systems.

### **What is TLS?**

**TLS (Transport Layer Security)** is the successor to SSL and is a more secure and efficient protocol. It was introduced as a more robust standard after the vulnerabilities in SSL were discovered. **TLS** provides encryption, integrity, and authentication to ensure that data being exchanged between a client and server remains private and untampered.

Modern web applications use **TLS** to secure communications over HTTPS, replacing SSL, though it’s common for people to refer to TLS as “SSL” in practice.

### **Differences Between TLS and SSL**

| **Aspect**               | **SSL**                                                   | **TLS**                                                   |
|--------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
| **Versions**              | SSL has versions up to SSL 3.0, which is deprecated.      | TLS has multiple versions (1.0, 1.1, 1.2, 1.3), with TLS 1.3 being the latest. |
| **Security**              | Contains several known vulnerabilities, such as POODLE.  | Improved security mechanisms, especially from TLS 1.2 onwards. |
| **Handshake Process**     | SSL's handshake is slower and less efficient.             | TLS introduces improved handshake performance and security algorithms. |
| **Key Exchange**          | SSL supports only older key exchange methods.             | TLS supports modern, secure key exchange mechanisms (e.g., elliptic curve cryptography). |
| **Message Integrity**     | SSL uses MAC (Message Authentication Code) for integrity. | TLS uses HMAC (Hashed Message Authentication Code), which is more secure. |
| **Decryption**            | SSL vulnerable to certain attacks, such as BEAST.         | TLS has mitigations against these attacks, making it more secure. |
| **Browser Support**       | Deprecated in modern browsers; SSL is no longer supported. | TLS is supported by all modern browsers (TLS 1.2/1.3). |
| **Use Cases Today**       | Practically obsolete.                                     | TLS is the standard protocol for securing online communications today. |

### **Key Improvements in TLS Over SSL**

1. **Stronger Encryption Algorithms**: TLS uses more modern encryption algorithms, making it harder for attackers to break.
2. **Better Handshake Security**: TLS introduced stronger key exchange mechanisms, including forward secrecy, which ensures that even if the server's private key is compromised, past sessions remain secure.
3. **Performance Enhancements**: TLS 1.3, in particular, made the handshake process faster, reducing latency during the initial connection setup.
4. **Security Fixes**: SSL suffered from numerous vulnerabilities, like the BEAST and POODLE attacks. TLS addresses these issues with improved cryptographic practices.



This project demonstrates the **TLS/SSL handshake** between a client and a server using Node.js. The project shows how a secure connection is established, including key exchange, certificate verification, and session key generation for symmetric encryption.

## TLS Handshake Process

1. The server starts an HTTPS server with **TLS**, using the `server.crt` (certificate) and `server.key` (private key).
2. The client connects to the server and performs the **TLS handshake**:
   - The client sends a `ClientHello` message, proposing cryptographic algorithms.
   - The server responds with `ServerHello`, chooses an encryption method, and sends its certificate (`server.crt`) to the client.
   - The client verifies the certificate and generates a **premaster secret**, which is encrypted with the server's public key.
   - Both the server and client generate a **session key** from the premaster secret and use it for symmetric encryption.
   
## Client Logs

The client logs key handshake details:
- **Cipher**: The encryption algorithm used (e.g., AES256).
- **Protocol**: The TLS version used (e.g., TLSv1.3).
- **Server Certificate Details**: The subject, issuer, and certificate validity dates.

## Project Breakdown

### TLS Server (`server.js`)
- Uses a self-signed certificate and private key to establish a secure HTTPS connection.
- Responds with a simple message indicating that the connection is encrypted.

### Client (`client.js`)
- Connects to the server, initiates the **TLS handshake**, and logs important handshake information:
  - Cipher used for encryption.
  - TLS protocol version.
  - Server certificate details (subject, issuer, and validity dates).

### TLS Handshake
This project demonstrates the core process of the **TLS handshake**, where the client and server:
- Agree on encryption algorithms.
- Exchange keys securely.
- Establish a symmetric session key for encrypting further communication.

---

## How to Run the Project

1. **Generate SSL Certificates** (if not already present):
   ```bash
   openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert/server.key -out cert/server.crt
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node server.js
   ```

4. **Run the client**:
   ```bash
   node client.js
   ```

---

This project provides a practical demonstration of the **TLS handshake** and secure communication over HTTPS in Node.js.

### **Conclusion**

- **SSL** is an outdated protocol with known vulnerabilities and is no longer considered secure.
- **TLS** is the modern, secure replacement for SSL, providing better encryption, integrity, and performance.
- All modern secure communication on the web (such as HTTPS) uses **TLS** rather than **SSL**, though the term "SSL" is still sometimes used interchangeably with TLS in common language. 

