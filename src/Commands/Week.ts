import { Emojis, Roles } from 'App/Utils'
import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Emoji, Message, MessageEmbed } from 'discord.js'
import { useClient, useCommands } from '@discord-ts-app/core/build/Hooks'

const emojiToString = (e: Emoji) => {
	return `<:${e.name}:${e.id}>`
}

@Command({ name: 'Display week availability', description: 'A command that display week disponibility with colors reactions', tag: '!week', roles: [] })
export default class Week implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		const emojis = await msg.client.emojis.cache.array().slice(0, 7)
		const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
		const embed = new MessageEmbed({
			title: 'Quand êtes vous disponibles cette semaine ?',
			color: '#7DEBEA',
		})

		embed.setDescription(
			emojis.map((emoji: any, i: number) => {
				return [`${emojiToString(emoji)}`, `${days[i]}`].join(' ➠ ')
			})
		)
		const sendedMsg = await msg.channel.send(embed)
		await msg.delete({ timeout: 100 })
		emojis.map((e) => sendedMsg.react(e))
	}
}
