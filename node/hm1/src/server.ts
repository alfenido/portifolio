import express from 'express';
import mainRoutes from './Routes/index';

const server = express();

server.use(mainRoutes);

server.listen(3000);