type LogType = 'success' | 'danger' | 'error'
export class Logger {
	logTypeEmoji: {[index in LogType]: string} = {'success': '⚡️', 'danger': '⚠️', 'error': '⛔'}
	log(type: LogType, text: string, priority: number = 0)
	{
		console.log(`${this.logTypeEmoji[type]} -> ${text}`)
		// TODO: добавить логирование в файл при необходимости, в зависимости от priority
	}
}