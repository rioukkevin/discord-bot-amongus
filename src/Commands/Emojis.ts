import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Message } from 'discord.js'

@Command({ name: 'emoji', description: 'A command that display list of availables emojis', tag: 'emoji', roles: [] })
export default class Emojis implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		const emojis = await msg.guild?.emojis.cache
			.array()
			.map((e) => e.name)
			.join(' ')
		console.log('Toto', emojis)
		msg.channel.send(emojis ?? 'None')
	}
}
