"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface GAvatarProps {
	src?: string;
	fallback?: string;
	size?: "sm" | "md" | "lg" | "xl";
	shape?: "circle" | "rounded" | "square";
	className?: string;
	ring?: boolean;
}

const sizeClasses = {
	sm: "h-6 w-6 text-xs",
	md: "h-10 w-10 text-sm",
	lg: "h-16 w-16 text-base",
	xl: "h-24 w-24 text-lg",
};

const shapeClasses = {
	circle: "rounded-full",
	rounded: "rounded-lg",
	square: "rounded-none",
};

const GAvatar = ({
	src,
	fallback = "NA",
	size = "md",
	shape = "circle",
	className,
	ring = false,
}: GAvatarProps) => {
	return (
		<Avatar
			className={cn(
				sizeClasses[size],
				shapeClasses[shape],
				ring && "ring-2 ring-background",
				className
			)}
		>
			{src ? <AvatarImage src={src} alt={fallback} /> : null}
			<AvatarFallback>{fallback}</AvatarFallback>
		</Avatar>
	);
};

export default GAvatar;
