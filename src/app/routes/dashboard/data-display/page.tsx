"use client";
import GAvatar from "@/app/common/components/data-display/GAvatar";
import GBadge from "@/app/common/components/data-display/GBadge";
import GPill from "@/app/common/components/data-display/GPill";
import GSectionHeader from "@/app/common/components/utility/GSectionHeader";
import DashboardLayout from "@/app/dashboard/layout/DashboardLayout";
import { AlertCircleIcon, CheckIcon } from "lucide-react";

const page = () => {
	return (
		<DashboardLayout>
			<GSectionHeader
				title="Badges"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>
			<div className="flex flex-col gap-3 mb-5">
				<div className="flex flex-wrap gap-2">
					<GBadge>Default</GBadge>
					<GBadge variant="secondary">Secondary</GBadge>
					<GBadge variant="destructive">Destructive</GBadge>
					<GBadge variant="outline">Outline</GBadge>
				</div>

				<div className="flex flex-wrap gap-2">
					<GBadge variant="secondary" icon={CheckIcon}>
						Verified
					</GBadge>
					<GBadge className="font-mono" size="sm">
						8
					</GBadge>
					<GBadge variant="destructive" size="sm">
						99
					</GBadge>
					<GBadge variant="outline" size="sm">
						20+
					</GBadge>
					<GBadge variant="default" icon={AlertCircleIcon} iconPosition="end">
						Alert
					</GBadge>
				</div>
			</div>

			<GSectionHeader
				title="Pill"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>
			<div className="flex flex-wrap gap-3 mb-8">
				<GPill>Default</GPill>
				<GPill variant="secondary">Secondary</GPill>
				<GPill variant="destructive">Destructive</GPill>
				<GPill variant="outline">Outline</GPill>
				<GPill variant="secondary" icon={CheckIcon}>
					Verified
				</GPill>
				<GPill variant="destructive" icon={AlertCircleIcon} iconPosition="end">
					Alert
				</GPill>
			</div>

			<GSectionHeader
				title="Avatar"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>
			<div className="flex flex-wrap items-center gap-4">
				<GAvatar src="https://github.com/shadcn.png" fallback="CN" />
				<GAvatar
					src="https://github.com/evilrabbit.png"
					fallback="ER"
					shape="rounded"
				/>
				<GAvatar src="https://github.com/leerob.png" fallback="LR" size="lg" />
				<GAvatar fallback="AB" size="xl" ring />
				<div className="flex -space-x-2">
					<GAvatar src="https://github.com/shadcn.png" fallback="CN" ring />
					<GAvatar src="https://github.com/leerob.png" fallback="LR" ring />
					<GAvatar src="https://github.com/evilrabbit.png" fallback="ER" ring />
				</div>
			</div>

			<GSectionHeader
				title="Table"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>
		</DashboardLayout>
	);
};

export default page;
