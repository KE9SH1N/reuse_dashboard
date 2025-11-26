"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

export function PageLimitSelector({
	limit,
	setPageRange,
}: {
	limit: number;
	setPageRange: (n: number) => void;
}) {
	const [open, setOpen] = React.useState(false);

	return (
		<Select
			value={limit.toString()}
			onValueChange={(v) => setPageRange(Number(v))}
			onOpenChange={setOpen}
		>
			<SelectTrigger className="w-[180px] hidden-default-arrow">
				<SelectValue placeholder="Rows" />
				<span className="custom-icon-wrapper">
					<ChevronDown
						className={cn(
							"ml-2 h-4 w-4 shrink-0 transition-transform duration-200",
							open && "rotate-180"
						)}
					/>
				</span>
			</SelectTrigger>
			<SelectContent>
				{[10, 20, 30, 50, 100].map((size) => (
					<SelectItem key={size} value={size.toString()}>
						{size}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
