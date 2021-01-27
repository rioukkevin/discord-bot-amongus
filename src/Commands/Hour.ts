import { Emojis, Roles } from 'App/Utils'
import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Emoji, Message, MessageEmbed } from 'discord.js'

const emojiToString = (e: Emoji) => {
	return `<:${e.name}:${e.id}>`
}

@Command({ name: 'Display hour availability', description: 'A command that display hour disponibility with colors reactions', tag: '!hours', roles: [] })
export default class Hour implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		const emojis = await msg.client.emojis.cache.array().slice(0, 11)
		const days = ['18h30-19h00', '19h00-19h30', '19h30-20h00', '20h00-20h30', '20h30-21h00', '21h00-21h30', '21h30-22h00', '22h00-22h30', '22h00-22h30', '23h00-23h30', '23h30-00h00']
		const embed = new MessageEmbed({
			title: "Quand êtes vous disponibles aujourd'hui (ce soir) ?",
			color: '#FF8845',
		})

		embed.setDescription(
			emojis.map((emoji: any, i: number) => {
				return [`${emojiToString(emoji)}`, `${days[i]}`].join(' ➠ ')
			})
		)
		const sendedMsg = await msg.channel.send(embed)
		console.log(embed.toJSON())
		await msg.delete({ timeout: 100 })
		emojis.map((e) => sendedMsg.react(e))
	}
}
