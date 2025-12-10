// "use client";

// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import { cn } from "@/lib/utils";
// import { X } from "lucide-react";
// import * as React from "react";

// export interface SelectOption {
// 	label: string;
// 	value: string;
// }

// interface GSelectProps {
// 	options?: SelectOption[];
// 	value?: string;
// 	onChange?: (value: string) => void;
// 	placeholder?: string;
// 	groupLabel?: string;
// 	disabled?: boolean;
// 	className?: string;
// 	onClear?: () => void;
// }

// const GSelect: React.FC<GSelectProps> = ({
// 	options,
// 	value,
// 	onChange,
// 	placeholder = "Select an option",
// 	groupLabel,
// 	disabled = false,
// 	className,
// 	onClear,
// }) => {
// 	const handleClear = (e: React.MouseEvent) => {
// 		e.stopPropagation(); // prevent dropdown toggle on clear click
// 		if (onClear) {
// 			onClear();
// 		} else {
// 			onChange?.("");
// 		}

// 		console.log("clicked");
// 	};

// 	return (
// 		<Select value={value} onValueChange={onChange} disabled={disabled}>
// 			<SelectTrigger className={cn("w-[300px] relative", className)}>
// 				<SelectValue placeholder={placeholder} className="truncate" />
// 				<div>
// 					{/* Clear Icon (Right side before dropdown arrow) */}
// 					{value && (
// 						<button
// 							onPointerDown={(e) => {
// 								e.preventDefault();
// 								e.stopPropagation();
// 								handleClear(e);
// 							}}
// 							className="absolute right-8 top-1/2 -translate-y-1/2 p-1"
// 						>
// 							<p className=" flex items-center justify-center gap-2">
// 								<X className="h-4 w-4 text-black dark:text-white " />
// 								<span className="select-none dark:text-whi text-black">|</span>
// 							</p>
// 						</button>
// 					)}
// 				</div>

// 				{/* Keep dropdown arrow untouched (shadcn default) */}
// 			</SelectTrigger>

// 			<SelectContent>
// 				<SelectGroup>
// 					{groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
// 					{options?.map((option) => (
// 						<SelectItem key={option.value} value={option.value}>
// 							{option.label}
// 						</SelectItem>
// 					))}
// 				</SelectGroup>
// 			</SelectContent>
// 		</Select>
// 	);
// };

// export default GSelect;

"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import * as React from "react";
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

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
	popoverContentClassName?: string;
}

const GSelect: React.FC<GSelectProps> = ({
	options = [],
	value,
	onChange,
	placeholder = "Select an option",
	disabled = false,
	className,
	onClear,
	popoverContentClassName,
}) => {
	const [open, setOpen] = React.useState(false);

	const selectedLabel =
		options.find((opt) => opt.value === value)?.label ?? placeholder;

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (onClear) onClear();
		else onChange?.("");
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					disabled={disabled}
					className={cn(
						"w-[300px] relative flex items-center justify-between border rounded-md px-3 py-1 text-left",
						"focus:outline-none",
						className
					)}
				>
					<span className="truncate">{selectedLabel}</span>

					{/* Right section: clear + divider + arrow */}
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
							</button>
						)}

						{/* Divider ALWAYS visible */}
						<span className="text-black dark:text-white">
							<RxDividerVertical />
						</span>

						<GoTriangleDown className="text-xl opacity-50" />
					</div>
				</button>
			</PopoverTrigger>

			<PopoverContent className={`w-[300px] ${popoverContentClassName}`}>
				<div className="max-h-[200px] overflow-y-auto">
					{options.map((option) => (
						<div
							key={option.value}
							className="px-2 py-1 cursor-pointer hover:bg-accent rounded-sm"
							onClick={() => {
								onChange?.(option.value);
								setOpen(false);
							}}
						>
							{option.label}
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default GSelect;
