"use client";

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
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

export interface SelectOption {
	label: string;
	value: string;
}

interface GSelectWithSearchProps {
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
}

const GSelectWithSearch: React.FC<GSelectWithSearchProps> = ({
	options = [],
	value,
	onChange,
	placeholder = "Select an option",
	disabled = false,
	className,
}) => {
	const [open, setOpen] = useState(false);

	const selectedLabel =
		options.find((opt) => opt.value === value)?.label ?? placeholder;

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange?.("");
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					disabled={disabled}
					className={cn(
						"w-[300px] relative flex items-center justify-between border rounded-md px-3 py-2 text-left",
						"focus:outline-none",
						className
					)}
				>
					<span className="truncate">{selectedLabel}</span>

					{/* Right: Clear Icon + Divider + Arrow */}
					<div className="flex items-center gap-2 ml-2">
						{value && (
							<button
								onPointerDown={(e) => {
									e.preventDefault();
									e.stopPropagation();
									handleClear(e);
								}}
								className="p-1"
							>
								<IoCloseSharp />
								{/* <X className="h-4 w-4 text-black dark:text-white" /> */}
							</button>
						)}

						<span className="text-black dark:text-white">
							<RxDividerVertical />
						</span>

						<GoTriangleDown className="text-xl opacity-50" />
					</div>
				</button>
			</PopoverTrigger>

			<PopoverContent className="w-[290px] px-0">
				<Command>
					{/* Search box */}
					<CommandInput placeholder="Search..." />

					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>

						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={() => {
										onChange?.(option.value);
										setOpen(false);
									}}
								>
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default GSelectWithSearch;
