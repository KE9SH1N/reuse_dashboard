"use client";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GCheckbox from "@/app/common/ui/GCheckbox";
import { ComboboxOption } from "@/app/common/ui/GCombobox";
import GDatePicker from "@/app/common/ui/GDatePicker";
import GInput from "@/app/common/ui/GInput";
import GSelect, { SelectOption } from "@/app/common/ui/GSelect";
import GSelectWithSearch from "@/app/common/ui/GSelectWithSearch";
import GTextArea from "@/app/common/ui/GTextArea";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import { useState } from "react";

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

const page = () => {
	const [value, setValue] = useState<string>("");
	const [ageValue, setAgeValue] = useState<number>(0);
	const [text, setText] = useState<string>("");
	const [accepted, setAccepted] = useState<boolean>(false);
	const [selectedComboboxItem, setSelectedComboboxItem] = useState<string>("");

	const [gender, setGender] = useState<string>("");
	const [genderTwo, setGenderTwo] = useState<string>("");
	const [date, setDate] = useState<Date | undefined>(undefined);

	const genderOptions: SelectOption[] = [
		{ label: "Male", value: "1" },
		{ label: "Female", value: "2" },
		{ label: "Other", value: "3" },
	];
	return (
		<DashboardLayout>
			<GSectionHeader
				title="Inputs"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>

			<div className="grid grid-cols-12 gap-1">
				<div className="col-span-3">
					<GInput
						id="user-name-input" // required
						// label="Username" // optional label
						labelClass="" // custom label class
						wrapperClass="" // wrapper div styles
						className="" // input element class
						type="text" // input type
						placeholder="Enter username" // placeholder
						value={value} // controlled value
						onChange={(e) => setValue(e.target.value)} // onChange handler
						disabled={false} // allow typing
						readOnly={false} // input is editable
						error={value.length < 3 ? "Username must be at least 3 chars" : ""} // error message
						required={true} // adds a required flag
						name="username" // name attribute for forms
						autoComplete="off" // disable autocomplete
					/>
				</div>

				<div className="col-span-3">
					<GSelectWithSearch
						options={fruitOptions}
						value={gender}
						onChange={setGender}
						placeholder="Select gender"
						className="w-full"
						popoverContentClassName="!w-full"
					/>
				</div>
				<div className="col-span-3">
					<GDatePicker
						// label="Select Your Birth Date"
						value={date}
						onChange={(d) => setDate(d)}
						// description="Please pick a valid date."
						className="w-full"
						disabledDates={undefined}
						// disabledDates={(day) => day > new Date()} // Disable future dates
					/>
				</div>

				<div className="col-span-3">
					<GSelect
						options={genderOptions}
						value={genderTwo}
						onChange={(val) => setGenderTwo(val)}
						onClear={() => setGenderTwo("")}
						placeholder="Select gender"
						className="w-full"
						popoverContentClassName="!w-[300px]"
					/>
				</div>
			</div>
			<div className="max-w-[300px]">
				<GInput
					id="user-name-input" // required
					label="Username" // optional label
					labelClass="" // custom label class
					wrapperClass="" // wrapper div styles
					className="" // input element class
					type="text" // input type
					placeholder="Enter username" // placeholder
					value={value} // controlled value
					onChange={(e) => setValue(e.target.value)} // onChange handler
					disabled={false} // allow typing
					readOnly={false} // input is editable
					error={value.length < 3 ? "Username must be at least 3 chars" : ""} // error message
					required={true} // adds a required flag
					name="username" // name attribute for forms
					autoComplete="off" // disable autocomplete
				/>
				<br />

				<GTextArea
					id="details"
					label="Details"
					placeholder="Write your details..."
					required={false}
					value={text}
					onChange={(e) => setText(e.target.value)}
					maxLength={200}
					showCount
					wrapperClass=""
					labelClass=""
					className=""
					description="Give a short description"
					error={
						text.length < 10 ? "Minimum 10 characters required" : undefined
					}
				/>
				{/* For Number Input */}
				<GInput
					id="user-age" // required
					label="Age" // optional label
					labelClass="" // custom label class
					wrapperClass="" // wrapper div styles
					className="" // input element class
					type="number" // input type
					placeholder="Enter Age" // placeholder
					value={ageValue} // controlled value
					onChange={(e) => setAgeValue(Number(e.target.value))} // onChange handler
					disabled={false} // allow typing
					readOnly={false} // input is editable
					// error={ageValue.length < 3 ? "Username must be at least 3 chars" : ""} // error message
					required={true} // adds a required flag
					name="username" // name attribute for forms
					autoComplete="off" // disable autocomplete
				/>
				<GCheckbox
					id="terms"
					label="Accept Terms and Conditions"
					description="You must accept before proceeding"
					checked={accepted}
					onChange={setAccepted}
					disabled={false}
					className="mt-4"
				/>

				<div className=" space-y-4">
					<h2 className="text-xl font-semibold">Select Example</h2>

					<GSelect
						options={genderOptions}
						value={genderTwo}
						onChange={(val) => setGenderTwo(val)}
						onClear={() => setGenderTwo("")}
						placeholder="Select gender"
						className="w-full"
						popoverContentClassName="!w-[300px]"
					/>

					<p className="text-sm">
						Selected value:{" "}
						<span className="font-semibold">{genderTwo || "None"}</span>
					</p>
				</div>

				<div className="mt-6 space-y-4">
					<h2 className="text-xl font-semibold">Select Example With Search</h2>
					<GSelectWithSearch
						options={fruitOptions}
						value={gender}
						onChange={setGender}
						placeholder="Select gender"
						className="w-full"
						popoverContentClassName="!w-[300px]"
					/>

					<p className="mt-4">Selected: {gender || "None"}</p>
				</div>

				<div className="mt-6 space-y-4">
					<GDatePicker
						label="Select Your Birth Date"
						value={date}
						onChange={(d) => setDate(d)}
						description="Please pick a valid date."
						className="w-full"
						disabledDates={undefined}
						// disabledDates={(day) => day > new Date()} // Disable future dates
					/>

					<div>
						<p className="text-sm">
							Selected: {date ? date.toDateString() : "None"}
						</p>
					</div>
				</div>
				<div className="w-[600px] flex items-start justify-start gap-x-2">
					{/* parent width */}
					<div className="w-[250px] mt-6 space-y-4">
						<GDatePicker
							label=""
							value={date}
							onChange={(d) => setDate(d)}
							description="Please pick a valid date."
							className="w-full" //input field width
							popoverContentClassName="!w-[250px]" //same as the parent width so that the body width will match
							disabledDates={(day) => day > new Date()} // Disable future dates
						/>
					</div>
					<div className="w-[250px] mt-6 space-y-4">
						<GSelectWithSearch
							options={fruitOptions}
							value={gender}
							onChange={setGender}
							placeholder="Select gender"
							className="w-full"
							popoverContentClassName="!w-[250px]"
						/>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default page;
