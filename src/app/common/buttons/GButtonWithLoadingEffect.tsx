"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { FaSearch } from "react-icons/fa";

interface GButtonWithLoadingProps extends ButtonProps {
	isLoading?: boolean;
	loadingText?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	searchMode?: boolean;
}

const GButtonWithLoading: React.FC<GButtonWithLoadingProps> = ({
	children,
	className,
	isLoading = false,
	loadingText = "Loading",
	disabled,
	iconLeft,
	iconRight,
	type = "button",
	searchMode = false,
	...props
}) => {
	return (
		<Button
			type={type}
			disabled={disabled || isLoading}
			className={cn(
				"relative flex items-center justify-center gap-2 rounded font-medium transition-colors duration-500 ease-in-out",
				className
			)}
			{...props}
		>
			{/* {isLoading && (
				<span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin inline-block" />
			)}

			
			{!isLoading && iconLeft && (
				<span className="flex items-center">{iconLeft}</span>
			)}

			
			<span>{isLoading ? loadingText || children : children}</span>

			
			{!isLoading && iconRight && (
				<span className="flex items-center">{iconRight}</span>
			)} */}
			{/* Left Loading / Search Animation */}

			{isLoading && searchMode && (
				<span className="relative w-6 h-6 flex items-center justify-center">
					<FaSearch className="absolute animate-circle-move w-4 h-4 text-current" />
				</span>
			)}

			{isLoading && !searchMode && (
				<span className="w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin" />
			)}

			{/* Left Icon */}
			{!isLoading && iconLeft && (
				<span className="flex items-center">{iconLeft}</span>
			)}

			{/* Label */}
			<span>{isLoading ? loadingText || children : children}</span>

			{/* Right Icon */}
			{!isLoading && iconRight && (
				<span className="flex items-center">{iconRight}</span>
			)}
		</Button>
	);
};

export default GButtonWithLoading;
