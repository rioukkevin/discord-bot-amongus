import 'module-alias/register'
import Bot from '@discord-ts-app/core/build/Bot'
import Env from '@discord-ts-app/core/build/Utils/Env'
import { Week, Help, Hour } from 'App/Commands'
import { Ready, Message } from 'App/Events'
const Koa = require('koa')
const https = require('https')

Bot.registerCommands([Week, Help, Hour]).registerEvents([Ready, Message]).registerMiddlewares([]).registerModules([]).initialize().login(Env.get('CLIENT_TOKEN'))

export default Bot

const app = new Koa()

app.use(async (ctx: any) => {
	ctx.status = 200
	ctx.body = 'AmongUs Bot'
})

app.listen(process.env.PORT)

setInterval(() => {
	https.get('https://discord-bot-amongus-keke.herokuapp.com/keepalive')
}, 1000 * 60 * 10)
