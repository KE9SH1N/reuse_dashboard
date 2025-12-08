import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GSectionHeader from "@/app/common/utility/GSectionHeader";

const page = () => {
	return (
		<DashboardLayout>
			<GSectionHeader
				title="Form Elements"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>
		</DashboardLayout>
	);
};

export default page;
