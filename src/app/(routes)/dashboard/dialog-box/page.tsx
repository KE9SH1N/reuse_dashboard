"use client";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GAlertDialog from "@/app/common/ui/GAlertDialog";

const page = () => {
	return (
		<DashboardLayout>
			<div className=" flex gap-x-5 p-6">
				<GAlertDialog
					triggerLabel="Hello Alert Dialog!"
					title="Delete this user?"
					description="This will remove all associated data. This cannot be undone."
					actionText="Yes, delete"
					cancelText="No, keep"
					onConfirm={() => console.log("Deleted")}
					onCancel={() => console.log("Cancelled")}
					contentClassName="bg-white border shadow-md"
					cancelButtonClassName="bg-gray-100 text-gray-700 dark:hover:text-black hover:bg-gray-200"
					confirmButtonClassName="bg-red-600 text-white hover:bg-red-700"
				/>

				<GAlertDialog
					triggerLabel="Delete"
					title="Delete this user?"
					description="This will remove all associated data. This cannot be undone."
					actionText="Yes, delete"
					cancelText="No, keep"
					onConfirm={() => console.log("Deleted")}
					onCancel={() => console.log("Cancelled")}
					contentClassName="bg-white border shadow-md"
					cancelButtonClassName="bg-gray-100 text-gray-700 dark:hover:text-black hover:bg-gray-200"
					confirmButtonClassName="bg-red-600 text-white hover:bg-red-700"
				/>
			</div>
		</DashboardLayout>
	);
};

export default page;
