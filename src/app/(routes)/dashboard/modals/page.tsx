"use client";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GModal from "@/app/common/modals/GModal";
import GButton from "@/app/common/ui/GButton";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import { useState } from "react";
import DataTableV1 from "../datatable/components/DataTableV1";

const page = () => {
	// for modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const [modalComponent, setModalComponent] = useState<any>({
		title: "",
		component: null,
	});
	const OpenDataTableModal = () => {
		openModal();
		setModalComponent({
			title: "Data Table Modal",
			largeModal: false,
			component: (
				<div>
					<GSectionHeader
						title="Data Table inside Modal"
						// subtitle="Last 30 orders in the system"
						// className="mb-6"
						titleClass="text-xl font-bold"
						subtitleClass="text-gray-500 dark:text-gray-300"
					/>
					<DataTableV1 />
				</div>
			),
		});
	};
	return (
		<DashboardLayout>
			<div>
				<GButton onClick={OpenDataTableModal} variant="default">
					Open Data Table Modal
				</GButton>
				<GModal
					isOpen={isModalOpen}
					closeModal={closeModal}
					title={modalComponent?.title}
					largeModal={modalComponent?.largeModal}
				>
					<div className="h-full">{modalComponent?.component}</div>
				</GModal>
			</div>
		</DashboardLayout>
	);
};

export default page;
