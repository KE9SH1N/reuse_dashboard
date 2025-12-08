"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CheckboxWithLabelProps {
	id: string;
	label: string;
	description?: string;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	className?: string;
}

const GCheckbox = ({
	id,
	label,
	description,
	checked,
	defaultChecked,
	onChange,
	disabled = false,
	className,
}: CheckboxWithLabelProps) => {
	return (
		<Label
			htmlFor={id}
			className={cn(
				"flex items-start gap-3 rounded-lg p-3",
				"has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-950 has-[[aria-checked=true]]:text-white",
				"dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",
				className
			)}
		>
			<Checkbox
				id={id}
				checked={checked}
				defaultChecked={defaultChecked}
				onCheckedChange={(val) => onChange?.(!!val)}
				disabled={disabled}
				className={cn(
					"border-white dark:border-white",
					"data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white",
					"dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
				)}
			/>
			<div className="grid gap-1.5 font-normal">
				<p className="text-sm leading-none font-medium">{label}</p>
				{description && (
					<p className="text-muted-foreground text-sm">{description}</p>
				)}
			</div>
		</Label>
	);
};

export default GCheckbox;
