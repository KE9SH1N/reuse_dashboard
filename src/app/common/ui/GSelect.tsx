"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import * as React from "react";

export interface SelectOption {
	label: string;
	value: string;
}

interface GSelectProps {
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	groupLabel?: string;
	disabled?: boolean;
	className?: string;
	onClear?: () => void;
}

const GSelect: React.FC<GSelectProps> = ({
	options,
	value,
	onChange,
	placeholder = "Select an option",
	groupLabel,
	disabled = false,
	className,
	onClear,
}) => {
	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation(); // prevent dropdown toggle on clear click
		if (onClear) {
			onClear();
		} else {
			onChange?.("");
		}

		console.log("clicked");
	};

	return (
		<Select value={value} onValueChange={onChange} disabled={disabled}>
			<SelectTrigger className={cn("w-[300px] relative", className)}>
				<SelectValue placeholder={placeholder} className="truncate" />
				<div>
					{/* Clear Icon (Right side before dropdown arrow) */}
					{value && (
						<button
							onPointerDown={(e) => {
								e.preventDefault();
								e.stopPropagation();
								handleClear(e);
							}}
							className="absolute right-8 top-1/2 -translate-y-1/2 p-1"
						>
							<p className=" flex items-center justify-center gap-2">
								<X className="h-4 w-4 text-black dark:text-white " />
								<span className="select-none dark:text-white text-black">
									|
								</span>
							</p>
						</button>
					)}
				</div>

				{/* Keep dropdown arrow untouched (shadcn default) */}
			</SelectTrigger>

			<SelectContent>
				<SelectGroup>
					{groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
					{options?.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default GSelect;
