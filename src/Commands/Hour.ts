import { Emojis, Roles } from 'App/Utils'
import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Emoji, Message } from 'discord.js'

const emojiToString = (e: Emoji) => {
	return `<:${e.name}:${e.id}>`
}

@Command({ name: 'Display hour availability', description: 'A command that display hour disponibility with colors reactions', tag: 'hour', roles: [] })
export default class Hour implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		const emojis = await msg.client.emojis.cache.array()
		const botMsg = await msg.channel.send(`Quand êtes vous disponibles ?
${emojiToString(emojis[0])} 18h30-19h00 
${emojiToString(emojis[1])} 19h00-19h30
${emojiToString(emojis[2])} 19h30-20h00
${emojiToString(emojis[3])} 20h00-20h30
${emojiToString(emojis[4])} 20h30-21h00
${emojiToString(emojis[5])} 21h00-21h30
${emojiToString(emojis[6])} 21h30-22h00
${emojiToString(emojis[7])} 22h00-22h30
${emojiToString(emojis[8])} 22h30-23h00
${emojiToString(emojis[9])} 23h00-23h30
${emojiToString(emojis[10])} 23h30-00h00`)
		botMsg.react(emojis[0])
		botMsg.react(emojis[1])
		botMsg.react(emojis[2])
		botMsg.react(emojis[3])
		botMsg.react(emojis[4])
		botMsg.react(emojis[5])
		botMsg.react(emojis[6])
		botMsg.react(emojis[7])
		botMsg.react(emojis[8])
		botMsg.react(emojis[9])
		botMsg.react(emojis[10])
	}
}
