type LogType = 'success' | 'danger' | 'error'
export class Logger {
	static logTypeEmoji: {[index in LogType]: string} = {'success': '⚡️', 'danger': '⚠️', 'error': '⛔'}
	static log(type: LogType, text: string, priority: number = 0)
	{
		console.log(`${Logger.logTypeEmoji[type]} [SERVER][${priority}] -> ${text}`)
		// TODO: добавить логирование в файл при необходимости, в зависимости от priority
	}
}