"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import * as React from "react";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface GTooltipButtonProps extends ButtonProps {
	tooltip: string;
	className?: string;
}

const GTooltipButton = React.forwardRef<HTMLButtonElement, GTooltipButtonProps>(
	({ tooltip, className, children, ...props }, ref) => {
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Button ref={ref} className={cn("", className)} {...props}>
						{children}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{tooltip}</p>
				</TooltipContent>
			</Tooltip>
		);
	}
);

GTooltipButton.displayName = "GTooltipButton";

export default GTooltipButton;
