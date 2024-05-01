// Title: cluster module of nodejs
// Author: Preetha I
// created date: 28/04/2024


const cluster = require('cluster');
const net = require('net');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const server = net.createServer(socket => {
    socket.end('Hello TCP Client\n');
  });

  server.listen(3000, () => {
    console.log(`Worker ${process.pid} is listening on port 3000`);
  });
}
