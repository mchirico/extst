const { server, port } = require("./src/server");

server.listen(port, () => {
  console.log(`🚀 Server is up: port ${port}`);
  console.log(`Try: curl http://localhost:${port}/example/a`);
});
