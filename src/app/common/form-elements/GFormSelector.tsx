"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";

type AnyObj = Record<string, any>;

function getNested(obj: AnyObj | undefined, path?: string) {
	if (!obj || !path) return undefined;
	const parts = path.split(".");
	let cur: any = obj;
	for (const p of parts) {
		if (cur == null) return undefined;
		cur = cur[p];
	}
	return cur;
}

export interface ShadcnFormAutoCompleteProps {
	name: string;
	// required: the form field name (used by react-hook-form to register the value)

	label?: string;
	// (optional) the label text shown above the select dropdown

	data?: AnyObj[];
	// (optional) raw data array of objects (the source of options)

	placeholder?: string;
	// (optional) text shown when nothing is selected, default: "Select an option"

	disabled?: boolean;
	// (optional) disables the dropdown if true

	// ---------------- field keys -----------------

	valueKey?: string;
	// (optional) which field in your data object should be used as the option "value"
	// default: "id"

	labelKey?: string;
	// (optional) which field in your data object should be displayed as the option label
	// default: "label" or "name"

	changeDataSourceId?: string;
	// (optional) alias for valueKey (kept for backwards compatibility)
	// e.g. use this if your backend sends a different key instead of "id"

	groupBy?: string;
	// (optional) group options by this field (supports nested paths like "category.name")

	// ---------------- UI / UX -----------------

	isClearable?: boolean;
	// (optional) if true, shows a clear (X) button to reset the selection

	wrapperClass?: string;
	labelClass?: string;
	// (optional) extra classes for the wrapper container

	triggerClassName?: string;
	// (optional) extra classes for the trigger (the visible button/input part)

	// ---------------- Validation & Callbacks -----------------
	isRequired?: boolean;
	// (optional) if true, show a red * beside the label (for required/important fields)

	rules?: any;
	// (optional) react-hook-form validation rules (e.g. { required: "Field is required" })

	onSelect?: (
		value: string | null,
		label: string | null,
		item?: AnyObj | null
	) => void;
	// (optional) callback fired whenever an option is selected or cleared
	// gives you the selected "value", display "label", and full "item" from your data
}

export default function GFormSelector({
	name,
	label,
	data = [],
	placeholder = "Select an option",
	disabled = false,
	valueKey = "id",
	labelKey = "label",
	changeDataSourceId,
	groupBy,
	isClearable = true,
	wrapperClass,
	labelClass,
	triggerClassName,
	rules,
	isRequired,
	onSelect,
}: ShadcnFormAutoCompleteProps) {
	const { control, setValue, formState } = useFormContext();
	const errorMessage = (formState.errors as any)[name]?.message as
		| string
		| undefined;

	const effectiveValueKey = changeDataSourceId ?? valueKey;

	// Build options ensuring every option.value is a non-empty string (avoid Radix error).
	const options = React.useMemo(() => {
		return (data || []).map((item, idx) => {
			// prefer nested path, fallback to id or index
			const rawValue = getNested(item, effectiveValueKey) ?? item?.id ?? idx;
			// coerce to string and ensure non-empty
			const valueStr = String(rawValue ?? idx);
			const labelVal =
				getNested(item, labelKey) ??
				item[labelKey] ??
				item["name"] ??
				item["title"] ??
				valueStr;
			const group = groupBy ? getNested(item, groupBy) ?? undefined : undefined;
			return { value: valueStr, label: String(labelVal), group, item };
		});
	}, [data, effectiveValueKey, labelKey, groupBy]);

	// group options array into groups
	const groups = React.useMemo(() => {
		if (!groupBy) return [{ label: undefined, items: options }];
		const map = new Map<string, typeof options>();
		for (const opt of options) {
			const g = opt.group ?? "Others";
			if (!map.has(g)) map.set(g, []);
			map.get(g)!.push(opt);
		}
		return Array.from(map.entries()).map(([label, items]) => ({
			label,
			items,
		}));
	}, [options, groupBy]);

	return (
		<div
			className={cn("grid w-full max-w-sm items-center gap-2", wrapperClass)}
		>
			{label && (
				<Label
					htmlFor={name}
					className={cn("text-sm font-medium ", labelClass)}
				>
					{label}
					{isRequired && <span className="text-red-500 pl-1">*</span>}
				</Label>
			)}

			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field }) => {
					// field.value may be string/number/null/undefined
					const current =
						field.value === undefined || field.value === null
							? ""
							: String(field.value);
					const selected = options.find((o) => o.value === current) ?? null;

					const handleClear = (e?: React.MouseEvent) => {
						e?.stopPropagation();
						setValue(name, ""); // set empty string so placeholder appears
						onSelect?.(null, null, null);
					};

					return (
						<Select
							value={selected?.value ?? ""}
							onValueChange={(val) => {
								setValue(name, val);
								const opt = options.find((o) => o.value === val) ?? null;
								onSelect?.(val || null, opt?.label ?? null, opt?.item ?? null);
							}}
							disabled={disabled}
						>
							<SelectTrigger className="w-full relative">
								<SelectValue
									placeholder={placeholder}
									className="truncate pr-10"
								/>{" "}
								{/* extra right padding for button + separator */}
								{isClearable && selected && selected.value !== "" && (
									<div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center space-x-1">
										<Button
											variant="ghost"
											size="sm"
											onPointerDown={(e) => {
												e.preventDefault();
												e.stopPropagation();
												setValue(name, "");
												onSelect?.(null, null, null);
											}}
											aria-label="Clear selection"
											className="p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0 flex items-center"
										>
											<IoCloseOutline className="text-gray-500" />
										</Button>
										<span className="text-gray-300 font-light select-none">
											|
										</span>
									</div>
								)}
							</SelectTrigger>

							<SelectContent>
								{options.map((opt) => (
									<SelectItem key={opt.value} value={opt.value}>
										{opt.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					);
				}}
			/>

			{errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
		</div>
	);
}
