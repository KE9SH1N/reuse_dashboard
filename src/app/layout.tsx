import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";

import localFont from "next/font/local";
import { ThemeProvider } from "./common/components/theme-provider";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Next Dashboard Kit",
	description: "Compact Dashboard Kit Using Shadcn and Next JS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<TooltipProvider delayDuration={200}>
						{children}
						<Toaster position="top-center" richColors />
						{/* position : top-left, top-right, bottom-left, bottom-right, bottom-center */}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
