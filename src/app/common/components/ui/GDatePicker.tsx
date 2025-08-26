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
		if (date) {
			setOpen(false);
		}
	};
	return (
		<div className={cn("flex flex-col gap-1", className)}>
			{label && <label className="text-sm font-medium">{label}</label>}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							"w-[240px] pl-3 text-left font-normal text-black",
							!value && "text-muted-foreground"
						)}
					>
						{value ? format(value, "PPP") : <span>Pick a date</span>}
						<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={value}
						onSelect={handleSelect}
						disabled={
							disabledDates ||
							((date) => date > new Date() || date < new Date("1900-01-01"))
						}
						captionLayout="dropdown"
					/>
				</PopoverContent>
			</Popover>
			{description && (
				<span className="text-xs text-muted-foreground">{description}</span>
			)}
		</div>
	);
};

export default GDatePicker;
