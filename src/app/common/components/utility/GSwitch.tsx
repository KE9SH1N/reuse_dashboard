"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface GSwitchProps {
	id: string;
	label?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	wrapperClass?: string;
	labelClass?: string;
	switchClass?: string;
}

const GSwitch = ({
	id,
	label,
	checked,
	onChange,
	disabled = false,
	wrapperClass,
	labelClass,
	switchClass,
}: GSwitchProps) => {
	return (
		<div className={cn("flex items-center space-x-2", wrapperClass)}>
			<Switch
				id={id}
				checked={checked}
				onCheckedChange={onChange}
				disabled={disabled}
				className={cn(
					// Track colors: automatically adapts with ThemeProvider
					"bg-black dark:bg-white",
					// Thumb colors: automatically adapts with ThemeProvider
					"data-[state=checked]:bg-black data-[state=unchecked]:bg-black dark:data-[state=checked]:bg-white dark:data-[state=unchecked]:bg-white",
					switchClass
				)}
			/>
			{label && (
				<Label
					htmlFor={id}
					className={cn(
						"text-sm font-medium text-gray-900 dark:text-gray-100",
						labelClass
					)}
				>
					{label}
				</Label>
			)}
		</div>
	);
};

export default GSwitch;
