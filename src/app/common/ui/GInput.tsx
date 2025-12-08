"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface GInputProps {
	id: string;
	label?: string;
	labelClass?: string;
	wrapperClass?: string;
	className?: string;
	type?: "text" | "email" | "password" | "number" | "search"; // You can add more if needed
	placeholder?: string;
	value?: string | number | readonly string[] | undefined | null;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	readOnly?: boolean;
	error?: string;
	required?: boolean;
	name?: string;
	autoComplete?: string;
}

const GInput = ({
	id,
	label,
	labelClass,
	wrapperClass,
	className,
	type = "text",
	placeholder,
	value,
	onChange,
	disabled = false,
	readOnly = false,
	error,
	required = false,
	name,
	autoComplete,
}: GInputProps) => {
	return (
		<div className={cn("grid w-full items-center gap-2", wrapperClass)}>
			{label && (
				<Label htmlFor={id} className={cn("text-sm font-medium", labelClass)}>
					{label}
				</Label>
			)}
			<Input
				id={id}
				type={type}
				name={name}
				value={value ?? ""}
				onChange={onChange}
				placeholder={placeholder}
				className={cn("", className)}
				disabled={disabled}
				readOnly={readOnly}
				required={required}
				autoComplete={autoComplete}
			/>
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default GInput;
