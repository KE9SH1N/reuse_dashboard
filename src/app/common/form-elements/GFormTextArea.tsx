"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // shadcn textarea
import { cn } from "@/lib/utils";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface FormTextAreaProps {
	name: string; // required for react-hook-form
	label?: string;
	labelClass?: string;
	wrapperClass?: string;
	textAreaClass?: string;
	rules?: RegisterOptions;
	placeholder?: string;
	isRequired?: boolean;
	rows?: number;
}

const GFormTextArea: React.FC<FormTextAreaProps> = ({
	name,
	label,
	labelClass,
	wrapperClass,
	textAreaClass,
	rules,
	placeholder,
	isRequired,
	rows = 4,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors[name]?.message as string | undefined;

	return (
		<div
			className={cn("grid w-full max-w-sm items-center gap-2", wrapperClass)}
		>
			{label && (
				<Label htmlFor={name} className={cn("text-sm font-medium", labelClass)}>
					{label}
					{isRequired && <span className="text-red-500 pl-1">*</span>}
				</Label>
			)}

			<Textarea
				id={name}
				placeholder={placeholder}
				rows={rows}
				{...register(name, rules)}
				className={cn("", textAreaClass)}
			/>

			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default GFormTextArea;
