https://youtu.be/V3ZPPPKEipA?si=Vt_AIF6ks54efy0Y
https://youtu.be/6G14NrjekLQ?si=KkCtX8c-a9aDeeEy
https://youtu.be/d-zn-wv4Di8?si=khQDaPHoLJaS_1Yl

# Terms

Packet: Small piece of data over a network
Encapsulation: Wrapping data with delivery info (layer by layer) to deliver it correctly
Sockets: Endpoint

Understand the relationship between tcp & http
How server use TCP for multiple http requests and responses

---

# Tools

nc -lvp 1234 || nc localhost 1234

## Wireshark

Capture the right interface Know how to start/stop capture

- Use filters http, tcp.port, ip.addr, etc.
  <protocol>.<field> <operator> <value>
  Top Wireshark Filters
  - tcp.stream eq X
  - tls, dns
  - http.request.method == "POST"
  - http.response.code >= 400
  - tcp.analysis.flags
  - websocket

- Follow streams Read full Api request/response

Analyze delays Time, retransmissions
Debug CORS/auth Watch headers and methods
Use “Statistics” tools Overview of traffic
Understand TCP handshake SYN/ACK basics
inspect HTTPS/TLS Certificate & handshake basics
Measure latency

https://youtu.be/68t07-KOH9Y?si=UZIPWI3sQEfSJ4cM
https://youtu.be/HCHFX5O1IaQ?si=XLmk0RruuofQzTaF
https://youtu.be/bW_BILl7n0Y?si=-cyQkQtVOpFHnWAz
https://youtu.be/-HDpYR_QSFw?si=2uZ0R0fUqgJ0q4pD

https://www.deepintodev.com/blog/how-data-travels-the-world-to-reach-your-screen
