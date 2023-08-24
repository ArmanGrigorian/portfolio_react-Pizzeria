const debounce = (func:(str: string) => void, timeout: number = 1000) => {
	let timer: NodeJS.Timeout | undefined = undefined;
	return (...args: [str: string]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};

export default debounce;
