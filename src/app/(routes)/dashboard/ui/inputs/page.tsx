"use client";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GCheckbox from "@/app/common/ui/GCheckbox";
import GInput from "@/app/common/ui/GInput";
import GTextArea from "@/app/common/ui/GTextArea";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import { useState } from "react";

const page = () => {
	const [value, setValue] = useState<string>("");
	const [ageValue, setAgeValue] = useState<number>(0);
	const [text, setText] = useState<string>("");
	const [accepted, setAccepted] = useState<boolean>(false);
	return (
		<DashboardLayout>
			<GSectionHeader
				title="Inputs"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>
			<div className="max-w-sm">
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
			</div>
		</DashboardLayout>
	);
};

export default page;
