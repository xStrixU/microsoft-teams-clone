'use client';

import { Toaster } from 'react-hot-toast';

export const ClientToaster = () => (
	<Toaster
		position="top-right"
		toastOptions={{
			duration: 2500,
		}}
	/>
);
