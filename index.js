import * as http from 'http';
import app from './app.js';

const server = http.createServer(app);

const port = 3000;

server.listen(port, "localhost");
