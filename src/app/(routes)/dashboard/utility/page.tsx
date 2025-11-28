"use client";

import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GBreadcrumb, { BreadcrumbRoute } from "@/app/common/ui/GBreadCrumb";
import GClipboardButton from "@/app/common/utility/GClipboardButton";
import GProgress from "@/app/common/utility/GProgress";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import GSeparator from "@/app/common/utility/GSeparator";
import GSwitch from "@/app/common/utility/GSwitch";
import { useState } from "react";

const breadcrumbItems: BreadcrumbRoute[] = [
	{ label: "Home", href: "/" },
	{ label: "Components", href: "/components" },
	{ label: "Breadcrumb" },
];

const page = () => {
	const [enabled, setEnabled] = useState(false);
	return (
		<div>
			<DashboardLayout>
				<GSectionHeader
					title="A Perfect Shaped Switch"
					// subtitle="Last 30 orders in the system"
					// className="mb-6"
					titleClass="text-xl font-bold"
					subtitleClass="text-gray-500 dark:text-gray-300"
				/>

				<GSwitch
					id="dark-mode"
					label="Switch"
					wrapperClass="mb-4"
					switchClass="h-6 w-10" // larger switch
					labelClass="text-lg font-semibold"
				/>
				<GSectionHeader
					title="Clipboard"
					// subtitle="Last 30 orders in the system"
					// className="mb-6"
					titleClass="text-xl font-bold"
					subtitleClass="text-gray-500 dark:text-gray-300"
				/>
				<div className="flex gap-x-3 mb-5">
					<GClipboardButton textToCopy="Hello World" label="Copy Text" />
					<GClipboardButton
						textToCopy="const a = 10;"
						label="Copy Code"
						className="px-2 py-1"
					/>
					<GClipboardButton textToCopy="123456" />
				</div>

				<GSectionHeader
					title="Progress"
					// subtitle="Last 30 orders in the system"
					// className="mb-6"
					titleClass="text-xl font-bold"
					subtitleClass="text-gray-500 dark:text-gray-300"
				/>
				<div className="flex flex-col gap-y-2">
					<GProgress value={50} variant="default" />
					<GProgress value={70} variant="success" className="w-60" />
					<GProgress value={30} variant="warning" animated />
					<GProgress value={90} variant="destructive" />
				</div>

				{/* vertical */}
				<GSectionHeader
					title="Separators [Vertical]"
					// subtitle="Last 30 orders in the system"
					// className="mb-6"
					titleClass="text-xl font-bold"
					subtitleClass="text-gray-500 dark:text-gray-300"
				/>
				<div className="flex items-center space-x-4 p-6">
					<div>Blog</div>
					<GSeparator orientation="vertical" className="h-5" />
					<div>Docs</div>
					<GSeparator orientation="vertical" className="h-5" />
					<div>Source</div>
				</div>

				{/* horizontal */}
				<GSectionHeader
					title="Separators [Horizontal]"
					// subtitle="Last 30 orders in the system"
					// className="mb-6"
					titleClass="text-xl font-bold"
					subtitleClass="text-gray-500 dark:text-gray-300"
				/>
				<div className="flex flex-col p-6">
					{/* Columns */}
					<div className="flex justify-start space-x-8">
						<div>Blog</div>
						<div>Docs</div>
						<div>Source</div>
					</div>

					{/* Single horizontal line under all columns */}
					<GSeparator orientation="horizontal" className="my-2" />
				</div>

				<div className="flex flex-col space-y-4 p-6">
					{["Blog", "Docs", "Source"].map((item, index) => (
						<div key={index} className="flex flex-col items-start">
							<div className="text-left">{item}</div>
							<GSeparator
								orientation="horizontal"
								className="w-12 h-px bg-gray-400 my-1"
							/>
						</div>
					))}
				</div>

				<GSectionHeader
					title="Breadcrumb"
					// subtitle="Last 30 orders in the system"
					// className="mb-6"
					titleClass="text-xl font-bold"
					subtitleClass="text-gray-500 dark:text-gray-300"
				/>

				<div className="p-6">
					<GBreadcrumb items={breadcrumbItems} />
				</div>
			</DashboardLayout>
		</div>
	);
};

export default page;
