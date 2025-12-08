"use client";
import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import GFormInput from "@/app/common/form-elements/GFormInput";
import GFormSelector from "@/app/common/form-elements/GFormSelector";
import GFormTextArea from "@/app/common/form-elements/GFormTextArea";
import GFormWrapper from "@/app/common/ui/GFormWrapper";
import GSectionHeader from "@/app/common/utility/GSectionHeader";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Create schema that matches FormValues
const formSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	genderId: z.string().optional(),
	age: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// interface FormPayload {
// 	name: string;
// 	description: string;
// 	genderId?: number;
// 	age?: number;
// }

export const gender = [
	{ title: "Male", id: 1 }, //anything instead of title except label will not work
	{ title: "Female", id: 2 },
];

const page = () => {
	const [data, setData] = useState<FormValues | null>(null);
	const methods = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
			genderId: "",
			age: undefined,
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log("Form Submitted:", data);

		const payload = { ...data, genderId: Number(data.genderId) };
		console.log("Payload to send:", payload);
		setData(data);
	};
	const handleClearForm = () => {
		methods.reset();
	};

	return (
		<DashboardLayout>
			<GSectionHeader
				title="Example Form Wrapper"
				// subtitle="Last 30 orders in the system"
				// className="mb-6"
				titleClass="text-xl font-bold"
				subtitleClass="text-gray-500 dark:text-gray-300"
			/>

			<GFormWrapper
				methods={methods}
				onSubmit={onSubmit}
				className="space-y-4 max-w-md"
				onError={(errors) => {
					console.log("Form Errors:", errors);
				}}
			>
				<GFormInput
					name="name"
					label="Name"
					placeholder="Enter your name"
					isRequired={true}
				/>

				<GFormTextArea
					name="description"
					label="Description"
					placeholder="Write details..."
					isRequired={true}
					rules={{ required: "Description is required" }}
					rows={3}
				/>

				<GFormSelector
					name="genderId"
					label="Gender"
					data={gender}
					valueKey="id" // the actual value field
					labelKey="title" // the label field
					placeholder="Choose gender"
					isRequired={false} // show red *
					wrapperClass="w-full" // wrapper full width
					triggerClassName="w-full" // select button full width
					onSelect={(id, label, item) => {
						console.log("value:", id, "label:", label, "item:", item);
					}}
				/>

				<GFormInput
					name="age"
					label="Age"
					placeholder="Enter your age"
					isRequired={false}
					type="number"
				/>
				<div className="flex items-start justify-start gap-x-2">
					<Button size={"sm"} type="submit">
						Submit
					</Button>
					<Button
						size={"sm"}
						type="button"
						variant="outline"
						onClick={handleClearForm}
					>
						Clear
					</Button>
				</div>
			</GFormWrapper>

			{data && (
				<div className="mt-6 p-4 border rounded-md bg-gray-50">
					<h3 className="font-semibold mb-2">Submitted Data:</h3>
					<pre className="text-sm text-gray-700">
						{JSON.stringify(data, null, 2)}
					</pre>
				</div>
			)}
		</DashboardLayout>
	);
};

export default page;
