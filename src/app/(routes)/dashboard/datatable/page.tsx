import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import DataTableV1 from "./components/DataTableV1";

const page = () => {
	return (
		<DashboardLayout>
			<div>
				<DataTableV1 />
			</div>
		</DashboardLayout>
	);
};

export default page;
