"use client";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GButton from "@/app/common/ui/GButton";
import { showToast } from "@/lib/toast.util";

const page = () => {
	return (
		<DashboardLayout>
			<div>
				<div className="space-x-4 p-6">
					<GButton
						onClick={() =>
							showToast({
								type: "info",
								title: "Heads up!",
								description:
									"Your profile is 80% complete. Add more info to boost visibility.",
							})
						}
						className="bg-black text-white"
						variant="outline"
					>
						Info
					</GButton>
					<GButton
						onClick={() =>
							showToast({
								type: "error",
								title: "Something went wrong",
								description: "Please try again later.",
							})
						}
						className="bg-black text-white"
						variant="secondary"
					>
						Error
					</GButton>
					<GButton
						onClick={() =>
							showToast({
								type: "warning",
								title: "Storage almost full",
								description: "You have 95% disk usage.",
							})
						}
						className="bg-black text-white"
						variant="destructive"
					>
						Warning
					</GButton>
					<GButton
						onClick={() =>
							showToast({
								title: "New Feature Available!",
								description: "Click to learn more.",
								actionLabel: "Learn",
								onAction: () => console.log("User clicked learn"),
							})
						}
						className="bg-black text-white"
						variant="destructive"
					>
						Action
					</GButton>
					<GButton
						onClick={() =>
							showToast({
								type: "success",
								title: "Order placed successfully!",
								description: "We’ll notify you once it ships.",
							})
						}
						className="bg-black text-white"
						variant="default"
					>
						Success
					</GButton>
					<GButton
						onClick={() =>
							showToast({
								type: "loading",
								title: "Uploading file...",
								description: "Please wait while we upload your data.",
							})
						}
						className="bg-black text-white"
						variant="ghost"
					>
						Loading...
					</GButton>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default page;
