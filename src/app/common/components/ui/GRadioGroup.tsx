"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface RadioOption {
	label: string;
	value: string;
	id?: string; // Optional ID if needed
}

interface GRadioGroupProps extends React.ComponentProps<typeof RadioGroup> {
	options: RadioOption[];
	itemClassName?: string;
	labelClassName?: string;
}

const GRadioGroup = React.forwardRef<HTMLDivElement, GRadioGroupProps>(
	({ options, itemClassName, labelClassName, className, ...props }, ref) => {
		return (
			<RadioGroup ref={ref} className={cn("space-y-2", className)} {...props}>
				{options.map((option, index) => {
					const id = option.id || `radio-${index}`;
					return (
						<div
							key={option.value}
							className={cn("flex items-center gap-3", itemClassName)}
						>
							<RadioGroupItem value={option.value} id={id} />
							<Label htmlFor={id} className={labelClassName}>
								{option.label}
							</Label>
						</div>
					);
				})}
			</RadioGroup>
		);
	}
);

GRadioGroup.displayName = "GRadioGroup";

export default GRadioGroup;
