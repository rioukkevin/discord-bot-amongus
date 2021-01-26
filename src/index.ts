import 'module-alias/register'
import Bot from '@discord-ts-app/core/build/Bot'
import Env from '@discord-ts-app/core/build/Utils/Env'
import { Week, Help, Hour } from 'App/Commands'
import { Ready, Message } from 'App/Events'

Bot.registerCommands([Week, Help, Hour])
    .registerEvents([Ready, Message])
    .registerMiddlewares([])
    .registerModules([])
    .initialize()
    .login(Env.get('CLIENT_TOKEN'))

export default Bot
