"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

interface DatePickerProps {
	label?: string;
	value?: Date;
	onChange?: (date: Date | undefined) => void;
	disabledDates?: (date: Date) => boolean;
	description?: string;
	className?: string;
}

const GDatePicker = ({
	label,
	value,
	onChange,
	disabledDates,
	description,
	className,
}: DatePickerProps) => {
	const [open, setOpen] = React.useState(false);

	const handleSelect = (date: Date | undefined) => {
		onChange?.(date);
		if (date) setOpen(false);
	};

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange?.(undefined);
	};

	return (
		<div className={cn("flex flex-col gap-1", className)}>
			{label && <label className="text-sm font-medium">{label}</label>}

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<div className="relative">
						<Button
							variant="outline"
							className={cn(
								"w-full pl-3 text-left font-normal text-black flex items-center justify-between",
								!value && "text-muted-foreground"
							)}
						>
							{value ? format(value, "PPP") : <span>Pick a date</span>}

							{/* RIGHT SIDE ICONS */}
							<div className="flex items-center gap-2">
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

								<span className="text-black dark:text-white">
									<RxDividerVertical />
								</span>

								<CalendarIcon className="h-4 w-4 opacity-50" />
							</div>
						</Button>
					</div>
				</PopoverTrigger>

				{/* Fix Mac Chrome dropdown stretching */}
				<PopoverContent className="min-w-[290px] p-0" align="center">
					<div className="calendar-fix">
						<Calendar
							mode="single"
							selected={value}
							onSelect={handleSelect}
							className="w-full"
							// disabled={
							// 	disabledDates ||
							// 	((date) => date > new Date() || date < new Date("1900-01-01"))
							// }
							disabled={
								disabledDates || ((date) => date < new Date("1900-01-01"))
							}
							captionLayout="dropdown"
						/>
					</div>
				</PopoverContent>
			</Popover>

			{description && (
				<span className="text-xs text-muted-foreground">{description}</span>
			)}
		</div>
	);
};

export default GDatePicker;
