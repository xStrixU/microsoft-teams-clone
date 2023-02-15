import { useEffect } from 'react';

export const useDocumentEvent = <T extends keyof WindowEventMap>(
	type: T,
	handler: (event: WindowEventMap[T]) => unknown
) => {
	useEffect(() => {
		window.addEventListener(type, handler);

		return () => {
			window.removeEventListener(type, handler);
		};
	}, [type, handler]);
};
