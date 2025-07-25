"use client";
import { showToast } from "@/lib/toast.util";
import { useState } from "react";
import GAlertDialog from "./common/components/GAlertDialog";
import GBreadcrumb, { BreadcrumbRoute } from "./common/components/GBreadCrumb";
import GButton from "./common/components/GButton";
import GCheckbox from "./common/components/GCheckbox";
import GCombobox, { ComboboxOption } from "./common/components/GCombobox";
import GDatePicker from "./common/components/GDatePicker";
import { default as GLabelInput } from "./common/components/GInput";
import GRadioGroup from "./common/components/GRadioGroup";
import GSelect, { SelectOption } from "./common/components/GSelect";
import GTextArea from "./common/components/GTextArea";
import GTooltipButton from "./common/components/GTooltipButton";

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

			<div className="mt-5 p-6">
				<GLabelInput
					id="email"
					name="dynamicName"
					type="email"
					label="Email"
					placeholder="Enter your email"
					className="bg-white text-black"
					labelClass="text-white"
					required={true}
					error=""
					onChange={(e) => {
						console.log(e.target.value);
					}}
				/>
			</div>
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
		</div>
	);
}
