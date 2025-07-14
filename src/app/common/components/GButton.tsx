"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GButtonProps extends ButtonProps {
	isLoading?: boolean;
}

const GButton = ({
	children,
	className,
	isLoading = false,
	disabled,
	type = "button", // ✅ default type set here
	...props
}: GButtonProps) => {
	return (
		<Button
			className={cn("rounded font-medium", className)}
			disabled={disabled || isLoading}
			type={type} // ✅ explicitly typed
			{...props}
		>
			{isLoading ? "Loading..." : children}
		</Button>
	);
};

export default GButton;
