"use client";

import {
	AudioWaveform,
	Bot,
	Command,
	GalleryVerticalEnd,
	Settings2,
	SquareTerminal,
} from "lucide-react";
import * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: GalleryVerticalEnd,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioWaveform,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: Command,
			plan: "Free",
		},
	],
	navMain: [
		{
			title: "UI",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "Input",
					url: "/dashboard/ui/inputs",
				},
				{
					title: "Button",
					url: "/dashboard/ui/buttons",
				},
			],
		},
		{
			title: "Data Table",
			url: "",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "React Table V1",
					url: "/dashboard/datatable",
				},
			],
		},
		{
			title: "Form Wrapper",
			url: "/dashboard/form-wrapper",
			icon: SquareTerminal,
			isActive: true,
			items: [],
		},
		{
			title: "Models",
			url: "/dashboard/modals",
			icon: Bot,
			items: [],
		},
		{
			title: "Dialog Box",
			url: "/dashboard/dialog-box",
			icon: SquareTerminal,
			isActive: true,
			items: [],
		},
		{
			title: "Toaster",
			url: "/dashboard/toaster",
			icon: SquareTerminal,
			isActive: true,
			items: [],
		},
		{
			title: "Utility",
			url: "/dashboard/utility",
			icon: SquareTerminal,
			isActive: true,
			items: [],
		},
		{
			title: "Data Display",
			url: "/dashboard/data-display",
			icon: SquareTerminal,
			isActive: true,
			items: [],
		},

		{
			title: "Settings",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "Grid Layout",
					url: "/dashboard/settings/grid-layout",
				},
			],
		},
	],
	// projects: [
	// 	{
	// 		name: "Design Engineering",
	// 		url: "#",
	// 		icon: Frame,
	// 	},
	// 	{
	// 		name: "Sales & Marketing",
	// 		url: "#",
	// 		icon: PieChart,
	// 	},
	// 	{
	// 		name: "Travel",
	// 		url: "#",
	// 		icon: Map,
	// 	},
	// ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
