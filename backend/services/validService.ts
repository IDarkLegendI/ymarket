export class ValidService {
	static isDataValid(data: string)
	{
		const re = /[^A-Z-a-z-0-9]/g;
		return (!re.test(data))
	}

	static isNumberValid(data: string)
	{
		const re = /[^0-9]/g;
		return (!re.test(data))
	}
}