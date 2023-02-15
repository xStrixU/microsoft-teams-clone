import { createSafeContext } from '@/lib/createSafeContext';

interface DropdownMenuContextValue {
	isOpen: boolean;
	toggle: () => void;
	close: () => void;
}

export const [useDropdownMenuContext, DropdownMenuContextProvider] =
	createSafeContext<DropdownMenuContextValue>();
