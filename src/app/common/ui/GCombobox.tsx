"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface ComboboxOption {
	label: string;
	value: string;
}

interface GComboboxProps {
	options?: ComboboxOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	inputPlaceholder?: string;
	emptyText?: string;
}

const GCombobox: React.FC<GComboboxProps> = ({
	options,
	value,
	onChange,
	placeholder = "Select option...",
	disabled = false,
	className,
	inputPlaceholder = "Search...",
	emptyText = "No option found.",
}) => {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					disabled={disabled}
					className={cn(
						"w-[200px] justify-between text-black relative pr-10",
						className
					)}
				>
					{/* Left label */}
					{value
						? options?.find((item) => item.value === value)?.label
						: placeholder}

					{/* RIGHT SIDE ICONS */}
					<div className="flex items-center absolute right-2 gap-1">
						{/* CLEAR (X) BUTTON — visible only when selected */}
						{value && (
							<Check
								onClick={(e) => {
									e.stopPropagation(); // prevents opening dropdown
									onChange?.(""); // reset value
								}}
								className="h-4 w-4 cursor-pointer text-red-500"
							/>
						)}

						{/* CHEVRON ICON */}
						<ChevronsUpDown className="h-4 w-4 opacity-50 text-black" />
					</div>
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={inputPlaceholder} className="h-9" />
					<CommandList>
						<CommandEmpty>{emptyText}</CommandEmpty>
						<CommandGroup>
							{options?.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={(currentValue) => {
										onChange?.(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
								>
									{option.label}
									<Check
										className={cn(
											"ml-auto h-4 w-4",
											value === option.value ? "opacity-100" : "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default GCombobox;
