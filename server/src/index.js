import '@babel/polyfill';
import Koa from 'koa';
import logger from 'koa-pino-logger';
import { MongoClient } from './database';

const server = new Koa();

server.use(logger());

server.use(async ctx => {
    const client = new MongoClient();
    client.connect();
    ctx.body = 'hello world';
});

server.listen(3000, (ctx)=> {
    console.info('Listening on port 3000');
});