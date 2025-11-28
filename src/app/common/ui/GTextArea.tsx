"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import * as React from "react";

interface GTextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
}

const GTextArea = React.forwardRef<HTMLTextAreaElement, GTextAreaProps>(
	({ className, ...props }, ref) => {
		return (
			<Textarea
				ref={ref}
				className={cn("min-h-[80px]", className)}
				{...props}
			/>
		);
	}
);

GTextArea.displayName = "GTextArea";

export default GTextArea;
