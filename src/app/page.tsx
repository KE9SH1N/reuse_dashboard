"use client";
import { showToast } from "@/lib/toast.util";
import { useState } from "react";
import GBreadcrumb, { BreadcrumbRoute } from "./common/components/GBreadCrumb";
import GButton from "./common/components/GButton";
import GCheckbox from "./common/components/GCheckbox";
import GCombobox, { ComboboxOption } from "./common/components/GCombobox";
import GDatePicker from "./common/components/GDatePicker";
import { default as GLabelInput } from "./common/components/GInput";
import GSelect, { SelectOption } from "./common/components/GSelect";
import GTextArea from "./common/components/GTextArea";

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
		</div>
	);
}
