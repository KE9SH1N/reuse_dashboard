"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

interface FormDatePickerProps {
	name: string;
	label?: string;
	labelClass?: string;
	wrapperClass?: string;
	inputClass?: string;
	rules?: RegisterOptions;
	description?: string;
	disabledDates?: (date: Date) => boolean;
	isRequired?: boolean; // for showing *
	disabled?: boolean; // to disable the picker
	disableFuture?: boolean;
}

const GFormDatePicker: React.FC<FormDatePickerProps> = ({
	name,
	label,
	labelClass,
	wrapperClass,
	inputClass,
	rules,
	description,
	disabledDates,
	isRequired,
	disabled,
	disableFuture = false,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	const error = errors[name]?.message as string | undefined;

	return (
		<div
			className={cn("grid w-full max-w-sm items-center gap-2", wrapperClass)}
		>
			{label && (
				<label className={cn("text-sm font-medium", labelClass)}>
					{label}
					{isRequired && <span className="text-red-500 pl-1">*</span>}
				</label>
			)}

			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }) => {
					const [open, setOpen] = React.useState(false);

					const handleSelect = (date: Date | undefined) => {
						field.onChange(date);
						if (date) setOpen(false);
					};
					const handleClear = (e: React.MouseEvent) => {
						e.preventDefault();
						e.stopPropagation(); // prevent popover toggle
						field.onChange(undefined);
						setOpen(false);
						console.log("close");
					};

					return (
						<div className=" relative w-full">
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="datePickerVariant"
										className={cn(
											"w-full pl-3 pr-8 text-left font-normal dark:text-white flex items-center justify-between ",
											!field.value && "text-muted-foreground",
											inputClass
										)}
										disabled={disabled}
									>
										<span>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
										</span>
										{!field.value && (
											<CalendarIcon className="h-4 w-4 opacity-50 ml-2" />
										)}
									</Button>
								</PopoverTrigger>
								{!disabled && (
									<PopoverContent
										className="w-auto p-0 dark:bg-gray-800"
										align="start"
									>
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={handleSelect}
											disabled={(date) => {
												// Combine user disabledDates and future restriction
												if (disabledDates?.(date)) return true;
												if (disableFuture && date > new Date()) return true;
												return date < new Date("1900-01-01");
											}}
											captionLayout="dropdown"
										/>
									</PopoverContent>
								)}
							</Popover>
							{field.value && !disabled && (
								<div
									className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer z-[1000] pointer-events-auto"
									onClick={handleClear}
								>
									<AiOutlineClose className="h-4 w-4 font-medium opacity-50" />
								</div>
							)}
						</div>
					);
				}}
			/>

			{description && (
				<span className="text-xs text-muted-foreground">{description}</span>
			)}
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default GFormDatePicker;
