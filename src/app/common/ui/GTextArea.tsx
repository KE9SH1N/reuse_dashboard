"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import * as React from "react";

interface GTextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	labelClass?: string;
	wrapperClass?: string;
	error?: string;
	description?: string;
	required?: boolean;
	showCount?: boolean; // show character counter
}

const GTextArea = React.forwardRef<HTMLTextAreaElement, GTextAreaProps>(
	(
		{
			label,
			labelClass,
			wrapperClass,
			error,
			description,
			required = false,
			showCount = false,
			maxLength,
			className,
			value,
			...props
		},
		ref
	) => {
		const currentLength = typeof value === "string" ? value.length : 0;

		return (
			<div className={cn("flex flex-col gap-1 w-full", wrapperClass)}>
				{/* Label Row (Label Left + Count Right) */}
				{(label || (showCount && maxLength)) && (
					<div className="flex items-center justify-between w-full">
						{/* Label */}
						{label && (
							<label
								htmlFor={props.id}
								className={cn("text-sm font-medium", labelClass)}
							>
								{label}
								{required && <span className="text-red-500 ml-1">*</span>}
							</label>
						)}

						{/* Counter Right */}
						{showCount && maxLength && (
							<span className="text-xs text-muted-foreground">
								{currentLength}/{maxLength}
							</span>
						)}
					</div>
				)}

				{/* Textarea */}
				<Textarea
					ref={ref}
					value={value}
					maxLength={maxLength}
					className={cn("min-h-[90px]", className)}
					{...props}
				/>

				{/* Helper text */}
				{description && (
					<p className="text-xs text-muted-foreground">{description}</p>
				)}

				{/* Error */}
				{error && <p className="text-xs text-red-500">{error}</p>}
			</div>
		);
	}
);

GTextArea.displayName = "GTextArea";

export default GTextArea;
