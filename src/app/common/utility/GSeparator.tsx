"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface GSeparatorProps {
	orientation?: "horizontal" | "vertical";
	className?: string;
	wrapperClass?: string; // optional wrapper div
}

const GSeparator = ({
	orientation = "horizontal",
	className,
	wrapperClass,
}: GSeparatorProps) => {
	// Auto-adjust sizing based on orientation
	const defaultClass =
		orientation === "horizontal"
			? "w-full h-px bg-gray-200"
			: "h-5 w-px bg-gray-200";

	return (
		<div className={wrapperClass}>
			<Separator
				orientation={orientation}
				className={cn(defaultClass, className)}
			/>
		</div>
	);
};

export default GSeparator;
