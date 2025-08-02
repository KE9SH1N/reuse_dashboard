"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import GBreadcrumb, {
	BreadcrumbRoute,
} from "../../common/components/GBreadCrumb";

const DashboardHeader = () => {
	const pathname = usePathname(); // e.g. "/dashboard/users/123"
	const segments = pathname.split("/").filter(Boolean); // ["dashboard", "users", "123"]

	// Build breadcrumb items dynamically
	const breadcrumbItems: BreadcrumbRoute[] = segments.map((seg, idx) => {
		const href = "/" + segments.slice(0, idx + 1).join("/");
		return {
			label: seg.charAt(0).toUpperCase() + seg.slice(1), // Capitalize
			href: idx === segments.length - 1 ? undefined : href, // last item not clickable
		};
	});

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
			<div className="flex items-center gap-2 px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator orientation="vertical" className="mr-2 h-4" />
				<GBreadcrumb items={breadcrumbItems} />
			</div>
		</header>
	);
};

export default DashboardHeader;
