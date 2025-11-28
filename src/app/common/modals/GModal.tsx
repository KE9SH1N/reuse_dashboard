"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import * as React from "react";
import { IoMdClose } from "react-icons/io";

type GModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	title?: string;
	titleClass?: string;
	largeModal?: boolean;
	children: React.ReactNode;
};

const GModal = ({
	isOpen,
	closeModal,
	title,
	titleClass = "text-lg font-medium leading-6 text-center text-gray-900 dark:text-white",
	largeModal = false,
	children,
}: GModalProps) => {
	return (
		<Dialog
			open={isOpen}
			// onOpenChange={(open) => {
			// 	if (!open) return; // prevent closing via backdrop/Esc
			// }}
		>
			<DialogContent
				onEscapeKeyDown={(e) => e.preventDefault()}
				onPointerDownOutside={(e) => e.preventDefault()}
				className={`w-full ${largeModal ? "max-w-[90%]" : "max-w-[55%]"}
  max-h-[90vh] overflow-hidden rounded-2xl 
  bg-white dark:bg-neutral-900 p-0
`}
			>
				{/* Sticky header with title */}
				{title && (
					<DialogHeader className="sticky top-0 z-10 bg-white dark:bg-neutral-900 shadow-sm border-b border-b-black/40 dark:border-b-white/40 border-[0.2px] p-3">
						<DialogTitle className={`${titleClass} text-center`}>
							{title}
						</DialogTitle>
					</DialogHeader>
				)}

				{/* Close button always top-right */}
				<button onClick={closeModal} className="absolute top-3 right-3 z-20">
					<IoMdClose
						size={25}
						className="cursor-pointer bg-red-500 rounded p-1 text-white hover:opacity-90 transition"
					/>
				</button>

				{/* Scrollable body */}
				<div className="overflow-y-auto max-h-[calc(90vh-60px)] p-4">
					{children}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default GModal;
