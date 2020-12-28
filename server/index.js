const server = require('./api/server.js').server;
require('dotenv').config();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});