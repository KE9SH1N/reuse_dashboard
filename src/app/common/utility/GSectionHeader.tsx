"use client";

import { cn } from "@/lib/utils";

interface GSectionHeaderProps {
	title: string;
	subtitle?: string;
	className?: string; // optional for wrapper div
	titleClass?: string; // optional for title
	subtitleClass?: string; // optional for subtitle
}

const GSectionHeader = ({
	title,
	subtitle,
	className,
	titleClass,
	subtitleClass,
}: GSectionHeaderProps) => {
	return (
		<div className={cn("mb-4", className)}>
			<h2
				className={cn(
					"text-lg font-semibold text-gray-900 dark:text-gray-100",
					titleClass
				)}
			>
				{title}
			</h2>
			{subtitle && (
				<p
					className={cn(
						"text-sm text-gray-600 dark:text-gray-400 mt-1",
						subtitleClass
					)}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
};

export default GSectionHeader;
