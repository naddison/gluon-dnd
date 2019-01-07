import '@babel/polyfill';
import Koa from 'koa';

const server = new Koa();

server.use(async ctx => {
    ctx.body = 'hello world';
});

server.listen(3000);