"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GBadgeProps {
	children: React.ReactNode;
	variant?: "default" | "secondary" | "destructive" | "outline";
	className?: string;
	size?: "sm" | "md" | "lg";
	icon?: LucideIcon;
	iconPosition?: "start" | "end";
	onClick?: () => void;
	rounded?: boolean;
}

const sizeClasses = {
	sm: "text-xs px-2 py-1 h-5",
	md: "text-sm px-3 py-1.5 h-6",
	lg: "text-base px-4 py-2 h-8",
};

const GBadge = ({
	children,
	variant = "default",
	className,
	size = "md",
	icon: Icon,
	iconPosition = "start",
	onClick,
	rounded = true,
}: GBadgeProps) => {
	return (
		<Badge
			variant={variant}
			className={cn(
				"inline-flex items-center gap-1 cursor-default select-none",
				sizeClasses[size],
				rounded && "rounded-full",
				className
			)}
			onClick={onClick}
		>
			{Icon && iconPosition === "start" && <Icon className="w-4 h-4" />}
			{children}
			{Icon && iconPosition === "end" && <Icon className="w-4 h-4" />}
		</Badge>
	);
};

export default GBadge;
