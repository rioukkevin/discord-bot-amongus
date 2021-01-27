import 'module-alias/register'
import Bot from '@discord-ts-app/core/build/Bot'
import Env from '@discord-ts-app/core/build/Utils/Env'
import { Week, Help, Hour } from 'App/Commands'
import { Ready, Message } from 'App/Events'
import Koa from 'koa'

const http = require('http');

const middleware = () => {
  const url = middleware.getUrl();

  setInterval(() => http.get(url), 3 * 60 * 1000);

  return async (ctx: any, next: () => void) => {
    if (ctx.path === '/keepalive') {
      ctx.status = 200;
      ctx.type = 'text';
      ctx.body = 'OK';
    }

    await next();
  }
};

middleware.getUrl = () => {
  return `http://discord-bot-amongus-keke.herokuapp.com/keepalive`;
};

const app = new Koa();

app.use(middleware)
app.use(async ctx => {
    ctx.body = 'AmongUs Bot';
});

app.listen(process.env.PORT);

Bot.registerCommands([Week, Help, Hour])
    .registerEvents([Ready, Message])
    .registerMiddlewares([])
    .registerModules([])
    .initialize()
    .login(Env.get('CLIENT_TOKEN'))

export default Bot
