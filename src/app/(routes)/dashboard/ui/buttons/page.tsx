"use client";
import GButtonWithLoading from "@/app/common/buttons/GButtonWithLoadingEffect";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GButton from "@/app/common/ui/GButton";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { IoPrint } from "react-icons/io5";

const page = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = () => {
		setLoading(true);
		// Simulate an async operation
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<DashboardLayout>
			<GSectionHeader
				title="Buttons"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>

			<div className="flex items-start justify-start gap-3">
				<GButtonWithLoading
					size={"sm"}
					variant={"default"}
					disabled={false}
					isLoading={loading}
					onClick={handleSubmit}
					className="bg-blue-600 text-white hover:bg-blue-700"
					iconLeft={<FaCheck />}
					// iconRight={<FaArrowRight />}
					loadingText="Processing"
				>
					Add
				</GButtonWithLoading>

				<GButtonWithLoading
					size={"sm"}
					variant={"default"}
					disabled={false}
					isLoading={loading}
					onClick={handleSubmit}
					className="bg-green-500 text-white hover:bg-green-600
           dark:bg-green-600 dark:hover:bg-green-700"
					// iconLeft={<FaCheck />}
					iconRight={<FaArrowRight />}
					loadingText="Updateing"
				>
					Update
				</GButtonWithLoading>
				<GButtonWithLoading
					size={"sm"}
					variant={"default"}
					disabled={false}
					isLoading={loading}
					onClick={handleSubmit}
					className="bg-gray-300 text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					// iconLeft={<FaCheck />}
					iconRight={<IoPrint />}
					loadingText="Printing"
				>
					Print
				</GButtonWithLoading>
				<GButtonWithLoading
					size={"sm"}
					variant={"default"}
					disabled={false}
					isLoading={loading}
					onClick={handleSubmit}
					className="bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600"
					// iconLeft={<FaCheck />}
					// iconRight={<IoPrint />}
					loadingText="Processing"
				>
					Submit
				</GButtonWithLoading>
				{/* <GButtonWithLoading
					size={"sm"}
					variant={"default"}
					disabled={false}
					isLoading={loading}
					onClick={handleSubmit}
					className="bg-orange-900 text-white hover:bg-orange-800"
					// iconLeft={<FaCheck />}
					// iconRight={<IoPrint />}
					loadingText="Searching"
				>
					Search
				</GButtonWithLoading> */}
				<GButtonWithLoading
					isLoading={loading}
					loadingText="Searching"
					searchMode={true}
					onClick={handleSubmit}
					className="bg-orange-900 text-white hover:bg-orange-800"
					size="sm"
					variant="default"
					// iconRight={<FaArrowRight />}
				>
					Search
				</GButtonWithLoading>

				<GButton
					size={"sm"}
					variant={"outline"}
					className="bg-sky-400 text-white hover:bg-sky-500 hover:text-white dark:bg-sky-500 dark:hover:bg-sky-600"
					isLoading={loading}
				>
					Test Loading
				</GButton>
			</div>
		</DashboardLayout>
	);
};

export default page;
