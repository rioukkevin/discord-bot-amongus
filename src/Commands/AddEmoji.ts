import { Command } from '@discord-ts-app/core/build/Decorators/Class'
import { CommandInterface } from '@discord-ts-app/core/build/Interfaces'
import { Message } from 'discord.js'
import * as path from 'path'
import * as fs from 'fs'

@Command({ name: 'addEmoji', description: 'A command that display week disponibility with colors reactions', tag: 'add-emoji', roles: [] })
export default class AddEmojis implements CommandInterface {
	public async run(msg: Message, args: string[]): Promise<void> {
		const directoryPath = path.join(__dirname, '../../assets/emojis')
		const files = await fs.readdirSync(directoryPath)
		const emojisNameList = msg.guild?.emojis.cache.array().map((e) => e.name)
		let isEmojiCreated = false
		await Promise.all(
			files.map(async (f) => {
				const pathFile = path.resolve('assets/emojis/' + f)
				const name = 'amongUs' + f.replace('.png', '')
				const isEmojiExisting = emojisNameList?.find((e) => e.includes(name))
				if (!isEmojiExisting) {
					await msg.guild?.emojis.create(fs.readFileSync(pathFile) as Buffer, name)
					isEmojiCreated = true
				}
			})
		)
		if (isEmojiCreated) msg.channel.send("C'est bon !")
		else msg.channel.send('Tous les emojis sont déjà présent sur ce serveur')
	}
}
