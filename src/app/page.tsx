"use client";
import { useState } from "react";
import GAlertDialog from "./common/ui/GAlertDialog";
import GBreadcrumb, { BreadcrumbRoute } from "./common/ui/GBreadCrumb";
import GCheckbox from "./common/ui/GCheckbox";
import GCombobox, { ComboboxOption } from "./common/ui/GCombobox";
import GDatePicker from "./common/ui/GDatePicker";
import GRadioGroup from "./common/ui/GRadioGroup";
import GSelect, { SelectOption } from "./common/ui/GSelect";
import GTextArea from "./common/ui/GTextArea";
import GTooltipButton from "./common/ui/GTooltipButton";
import GSeparator from "./common/utility/GSeparator";

const frameworkOptions: ComboboxOption[] = [
	{ label: "Next.js", value: "next.js" },
	{ label: "SvelteKit", value: "sveltekit" },
	{ label: "Nuxt.js", value: "nuxt.js" },
	{ label: "Remix", value: "remix" },
	{ label: "Astro", value: "astro" },
];

const fruitOptions: SelectOption[] = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grapes", value: "grapes" },
	{ label: "Pineapple", value: "pineapple" },
];

const breadcrumbItems: BreadcrumbRoute[] = [
	{ label: "Home", href: "/" },
	{ label: "Components", href: "/components" },
	{ label: "Breadcrumb" }, // current page
];

export default function Home() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>();
	const [enabled, setEnabled] = useState(false);
	const [selectedComboboxItem, setSelectedComboboxItem] = useState("");
	const [fruit, setFruit] = useState("");

	return (
		<div>
			<div className="p-6">
				<GDatePicker
					label="Select your birth date"
					value={selectedDate}
					onChange={setSelectedDate}
					// description="You must be over 18."
				/>
			</div>
			<div className="p-6">
				<GCheckbox
					id="notify"
					label="Enable notifications"
					checked={enabled}
					onChange={setEnabled}
				/>
			</div>
			<div className="p-6">
				<GCombobox
					options={frameworkOptions}
					value={selectedComboboxItem}
					onChange={setSelectedComboboxItem}
					placeholder="Select an Item"
				/>
			</div>
			<div className="p-6">
				<GTextArea placeholder="Write your message..." />
			</div>
			<div className="p-6">
				<GSelect
					options={fruitOptions}
					value={fruit}
					onChange={setFruit}
					placeholder="Select a fruit"
					groupLabel="Fruits"
					onClear={() => setFruit("")}
				/>
			</div>
			<div className="p-6">
				<GBreadcrumb items={breadcrumbItems} />
			</div>
			<div className="p-6">
				<GTooltipButton
					variant="outline"
					className="text-black"
					tooltip="Tooltip Me"
				>
					Tooltip me
				</GTooltipButton>
			</div>
			<div className="p-6">
				<GAlertDialog
					triggerLabel="Hello Alert Dialog!"
					title="Delete this user?"
					description="This will remove all associated data. This cannot be undone."
					actionText="Yes, delete"
					cancelText="No, keep"
					onConfirm={() => console.log("Deleted")}
					onCancel={() => console.log("Cancelled")}
					contentClassName="bg-white border shadow-md"
					cancelButtonClassName="bg-gray-100 text-gray-700 hover:bg-gray-200"
					confirmButtonClassName="bg-red-600 text-white hover:bg-red-700"
				/>
			</div>
			<div className="p-6">
				<GAlertDialog
					triggerLabel="Delete"
					title="Delete this user?"
					description="This will remove all associated data. This cannot be undone."
					actionText="Yes, delete"
					cancelText="No, keep"
					onConfirm={() => console.log("Deleted")}
					onCancel={() => console.log("Cancelled")}
					contentClassName="bg-white border shadow-md"
					cancelButtonClassName="bg-gray-100 text-gray-700 hover:bg-gray-200"
					confirmButtonClassName="bg-red-600 text-white hover:bg-red-700"
				/>
			</div>
			<div className="p-6">
				<GRadioGroup
					defaultValue="comfortable"
					options={[
						{ label: "Default", value: "default" },
						{ label: "Comfortable", value: "comfortable" },
						{ label: "Compact", value: "compact" },
					]}
					onValueChange={(value) => console.log("Selected:", value)}
					className="w-[250px] p-4"
					itemClassName="bg-gray-100 p-2 rounded"
					labelClassName="text-sm text-gray-700"
				/>
			</div>
			{/* vertical */}
			<div className="flex items-center space-x-4 p-6">
				<div>Blog</div>
				<GSeparator orientation="vertical" className="h-5" />
				<div>Docs</div>
				<GSeparator orientation="vertical" className="h-5" />
				<div>Source</div>
			</div>
			{/* horizontal  */}
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
		</div>
	);
}
