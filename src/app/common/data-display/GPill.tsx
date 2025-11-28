"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GPillProps {
	children: React.ReactNode;
	variant?: "default" | "secondary" | "destructive" | "outline";
	size?: "sm" | "md" | "lg";
	className?: string;
	icon?: LucideIcon;
	iconPosition?: "start" | "end";
	onClick?: () => void;
}

const sizeClasses = {
	sm: "text-xs px-3 py-1 h-6",
	md: "text-sm px-4 py-2 h-8",
	lg: "text-base px-5 py-3 h-10",
};

const GPill = ({
	children,
	variant = "default",
	size = "md",
	className,
	icon: Icon,
	iconPosition = "start",
	onClick,
}: GPillProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"inline-flex items-center gap-2 rounded-full cursor-pointer select-none transition-colors duration-200",
				sizeClasses[size],
				variant === "default" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
				variant === "secondary" && "bg-blue-500 text-white hover:bg-blue-600",
				variant === "destructive" && "bg-red-500 text-white hover:bg-red-600",
				variant === "outline" &&
					"border border-gray-300 text-gray-900 dark:text-white",
				className
			)}
		>
			{Icon && iconPosition === "start" && <Icon className="w-4 h-4" />}
			{children}
			{Icon && iconPosition === "end" && <Icon className="w-4 h-4" />}
		</div>
	);
};

export default GPill;
