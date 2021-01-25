import { Emojis, Roles } from 'App/Utils'
import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Emoji, Message } from 'discord.js'

const emojiToString = (e: Emoji) => {
	return `<:${e.name}:${e.id}>`
}

@Command({ name: 'Display week availability', description: 'A command that display week disponibility with colors reactions', tag: 'week', roles: [] })
export default class Example implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		const emojis = await msg.client.emojis.cache.array()
		const botMsg = await msg.channel.send(`Quand êtes vous disponibles ?
${emojiToString(emojis[0])} Lundi 
${emojiToString(emojis[1])} Mardi 
${emojiToString(emojis[2])} Mercredi
${emojiToString(emojis[3])} Jeudi 
${emojiToString(emojis[4])} Vendredi 
${emojiToString(emojis[5])} Samedi 
${emojiToString(emojis[6])} Dimanche `)
		botMsg.react(emojis[0])
		botMsg.react(emojis[1])
		botMsg.react(emojis[2])
		botMsg.react(emojis[3])
		botMsg.react(emojis[4])
		botMsg.react(emojis[5])
		botMsg.react(emojis[6])
	}
}
