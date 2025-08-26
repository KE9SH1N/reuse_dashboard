"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface GProgressProps {
	value: number;
	max?: number;
	className?: string;
	animated?: boolean;
	variant?: "default" | "success" | "warning" | "destructive";
}

const variantClasses: Record<string, string> = {
	default: "bg-blue-600 dark:bg-blue-400",
	success: "bg-green-600 dark:bg-green-400",
	warning: "bg-yellow-500 dark:bg-yellow-400",
	destructive: "bg-red-600 dark:bg-red-400",
};

const GProgress: React.FC<GProgressProps> = ({
	value,
	max = 100,
	className,
	animated = false,
	variant = "default",
}) => {
	const [internalValue, setInternalValue] = React.useState(value);

	React.useEffect(() => {
		if (animated) {
			const timer = setTimeout(() => setInternalValue(value), 50);
			return () => clearTimeout(timer);
		} else {
			setInternalValue(value);
		}
	}, [value, animated]);

	return (
		<div
			className={cn(
				"w-full h-4 bg-gray-400 dark:bg-white rounded-lg overflow-hidden",
				className
			)}
		>
			<div
				className={cn(
					"h-full transition-all duration-300",
					variantClasses[variant]
				)}
				style={{ width: `${(internalValue / max) * 100}%` }}
			/>
		</div>
	);
};

export default GProgress;
