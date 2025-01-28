import * as http from "http";

const PORT: number = parseInt(process.env.PING_LISTEN_PORT || "8080", 10);

const handlePing = (req: http.IncomingMessage, res: http.ServerResponse): void => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(req.headers, null, 2));
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/ping") {
    handlePing(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "404 Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
