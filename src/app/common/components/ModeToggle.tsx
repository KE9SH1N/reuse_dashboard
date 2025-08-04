"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					// size="icon"
					size="sm"
					className="focus-visible:outline-none focus-visible:0 focus-visible:ring-0"
				>
					{/* <button className="border-none focus:outline-none focus:bg-none"> */}
					{theme === "dark" ? (
						<Moon className="h-[1.2rem] w-[1.2rem] text-white" />
					) : (
						<Sun className="h-[1.2rem] w-[1.2rem]" />
					)}
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					className="cursor-pointer hover:bg-gray-200"
					onClick={() => setTheme("light")}
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className="cursor-pointer hover:bg-gray-200"
				>
					Dark
				</DropdownMenuItem>
				{/* <DropdownMenuItem
					onClick={() => setTheme("system")}
					className="cursor-pointer hover:bg-gray-200"
				>
					System
				</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
