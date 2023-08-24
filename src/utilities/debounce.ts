export default function debounce(func: () => void, timeout = 1000) {
	let timer: NodeJS.Timeout | undefined = undefined;
	return (...args: []) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}
