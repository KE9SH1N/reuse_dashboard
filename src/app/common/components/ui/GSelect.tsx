"use client";

import { Button } from "@/components/ui/button";
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
			<SelectTrigger className={cn("w-[300px] ", className)}>
				<SelectValue placeholder={placeholder} className="truncate " />

				{/* Right side container */}
				<div className="w-[180px] space-x-2 ">
					{value && (
						<div className="relative flex items-center justify-end z-40">
							<Button
								variant="ghost"
								size="sm"
								onPointerDown={(e) => {
									e.preventDefault();
									e.stopPropagation();
									handleClear(e);
								}}
								aria-label="Clear selection"
								className="p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0"
							>
								<X className="h-4 w-4 mr-3 text-white dark:text-gray-300" />
							</Button>
							<span className="select-none text-white dark:text-gray-500">
								|
							</span>
						</div>
					)}
				</div>
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
