export class ValidService {
	/**
	 * @param data - input text for validation
	 * @return false if text not valid
	 * @return true if text valid
	 */
	static isDataValid(data: string)
	{
		const re = /[^A-Z-a-z-0-9]/g;
		return (!re.test(data))
	}

	/**
	 * @param data - input text for validation
	 * @return false if text not valid
	 * @return true if text valid
	 */
	static isNumberValid(data: string)
	{
		const re = /[^0-9]/g;
		return (!re.test(data))
	}
}