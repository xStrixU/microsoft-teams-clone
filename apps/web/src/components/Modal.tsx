import { Transition } from '@headlessui/react';
import { createPortal } from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';

import type { ReactNode } from 'react';

type ModalProps = Readonly<{
	title: string;
	isOpen: boolean;
	children: ReactNode;
	onClose: () => void;
}>;

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) =>
	createPortal(
		<Transition
			role="presentation"
			onClick={onClose}
			show={isOpen}
			className="fixed top-0 left-0 right-0 bottom-0 z-50 flex overflow-y-auto bg-black/70 transition-opacity duration-150 sm:p-2"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div
				onClick={e => e.stopPropagation()}
				className="relative m-auto h-full w-full bg-neutral-foreground-inverted p-5 sm:h-fit sm:max-w-2xl sm:rounded-md"
			>
				<div className="mb-8 flex items-center">
					<strong className="text-xl font-bold text-neutral-foreground">{title}</strong>
					<button
						type="button"
						aria-label="Close modal"
						onClick={onClose}
						className="ml-auto text-neutral-foreground"
					>
						<VscChromeClose size={26} />
					</button>
				</div>
				{children}
			</div>
		</Transition>,
		document.body
	);
