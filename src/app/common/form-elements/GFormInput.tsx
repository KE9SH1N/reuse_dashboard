"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface FormInputProps {
	name: string;
	label?: string;
	labelClass?: string;
	wrapperClass?: string;
	inputClass?: string;
	rules?: RegisterOptions;
	type?: React.HTMLInputTypeAttribute;
	placeholder?: string;
	isRequired?: boolean;
	defaultValue?: string | number;
}

const GFormInput: React.FC<FormInputProps> = ({
	name,
	label,
	labelClass,
	wrapperClass,
	inputClass,
	rules,
	type = "text",
	placeholder,
	isRequired,
	defaultValue,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext(); // must be inside FormProvider

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
			<Input
				id={name}
				type={type}
				placeholder={placeholder}
				defaultValue={defaultValue}
				{...register(name, rules)}
				className={cn("", inputClass)}
			/>
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default GFormInput;
