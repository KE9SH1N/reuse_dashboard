"use client";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";

interface GClipboardButtonProps {
	textToCopy: string;
	label?: string;
	className?: string;
}

const GClipboardButton = ({
	textToCopy,
	label,
	className,
}: GClipboardButtonProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleCopy}
						className={cn(
							"flex items-center space-x-2",
							// Track background adapts to theme automatically
							"bg-slate-600 text-white dark:bg-white dark:text-black",
							className
						)}
						aria-label={label || "Copy to clipboard"}
					>
						{copied ? (
							<CheckIcon className="h-4 w-4 text-green-500" />
						) : (
							<ClipboardIcon className="h-4 w-4" />
						)}
						{label && <span>{label}</span>}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					{copied ? "Copied!" : "Copy to clipboard"}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default GClipboardButton;
