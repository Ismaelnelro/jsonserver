const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(process.env.DATABASE_URL);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3003;


server.use(middlewares);
server.use(router);


server.listen(port);