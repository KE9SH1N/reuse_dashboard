import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { AppSidebar } from "../sidebar/components/app-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="flex flex-col w-full">
					<DashboardHeader />
					<main className="flex-1 p-4">{children}</main>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default DashboardLayout;
