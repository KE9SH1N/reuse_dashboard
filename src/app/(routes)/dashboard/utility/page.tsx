"use client";

import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GClipboardButton from "@/app/common/utility/GClipboardButton";
import GProgress from "@/app/common/utility/GProgress";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import GSwitch from "@/app/common/utility/GSwitch";
import { useState } from "react";

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
			</DashboardLayout>
		</div>
	);
};

export default page;
