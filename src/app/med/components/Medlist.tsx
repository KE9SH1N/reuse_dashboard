"use client";

import { useState } from "react";

export default function TestComp() {
	// Example data
	const [medList] = useState([
		{
			id: 1,
			genericId: "G1",
			genericName: "Paracetamol",
			suggestedOrderQty: 20,
			brands: [
				{
					brandId: "B1",
					brandName: "Paracetamol-500",
					batch: "B123",
					expiry: "2025-05-01",
				},
				{
					brandId: "B2",
					brandName: "Dolo-650",
					batch: "B124",
					expiry: "2026-01-01",
				},
			],
		},
		{
			id: 2,
			genericId: "G2",
			genericName: "Amoxicillin",
			suggestedOrderQty: 15,
			brands: [
				{
					brandId: "B3",
					brandName: "Mox-250",
					batch: "B200",
					expiry: "2024-12-31",
				},
				{
					brandId: "B4",
					brandName: "Amoxil",
					batch: "B201",
					expiry: "2025-06-30",
				},
			],
		},
	]);

	// Store user selections here
	const [selectedRowData, setSelectedRowData] = useState([]);

	return (
		<div className="p-4">
			<h2 className="font-bold text-xl mb-2">Medicine Selection</h2>
			<table className="border w-full">
				<thead>
					<tr className="bg-gray-800">
						<th className="border px-2">Select</th>
						<th className="border px-2">Generic</th>
						<th className="border px-2">Brand</th>
						<th className="border px-2">Qty</th>
					</tr>
				</thead>
				<tbody>
					{medList.map((generic) => (
						<Row
							key={generic.genericId}
							generic={generic}
							selectedRowData={selectedRowData}
							setSelectedRowData={setSelectedRowData}
						/>
					))}
				</tbody>
			</table>

			<h3 className="mt-4 font-semibold">Selected Data</h3>
			<pre className="bg-gray-100 p-2 rounded text-black">
				{JSON.stringify(selectedRowData, null, 2)}
			</pre>
		</div>
	);
}

// ----------------------
// Row Component
// ----------------------
function Row({ generic, selectedRowData, setSelectedRowData }: any) {
	// Find if this generic is already selected
	const selected = selectedRowData.find(
		(row: any) => row.genericId === generic.genericId
	);

	// Checkbox toggle
	function toggleSelect(e: any) {
		if (e.target.checked) {
			setSelectedRowData((prev: any) => [
				...prev,
				{
					genericId: generic.genericId,
					genericName: generic.genericName,
					brandId: "",
					brandName: "",
					qty: 0,
				},
			]);
		} else {
			setSelectedRowData((prev: any) =>
				prev.filter((row: any) => row.genericId !== generic.genericId)
			);
		}
	}

	// Handle brand change
	function handleBrandChange(e: any) {
		const brandId = e.target.value;
		const brand = generic.brands.find((b: any) => b.brandId === brandId);

		setSelectedRowData((prev: any) =>
			prev.map((row: any) =>
				row.genericId === generic.genericId
					? { ...row, brandId: brand?.brandId, brandName: brand?.brandName }
					: row
			)
		);
	}

	// Handle qty change
	function handleQtyChange(e: any) {
		const qty = parseInt(e.target.value) || 0;

		setSelectedRowData((prev: any) =>
			prev.map((row: any) =>
				row.genericId === generic.genericId ? { ...row, qty } : row
			)
		);
	}

	return (
		<tr>
			{/* Checkbox */}
			<td className="border px-2 text-center">
				<input type="checkbox" checked={!!selected} onChange={toggleSelect} />
			</td>

			{/* Generic name */}
			<td className="border px-2">{generic.genericName}</td>

			{/* Brand dropdown */}
			<td className="border px-2 text-black">
				{selected && (
					<select
						value={selected.brandId}
						onChange={handleBrandChange}
						className="border p-1"
					>
						<option value="">-- Select --</option>
						{generic.brands.map((brand: any) => (
							<option key={brand.brandId} value={brand.brandId}>
								{brand.brandName}
							</option>
						))}
					</select>
				)}
			</td>

			{/* Qty input */}
			<td className="border px-2 text-black">
				{selected && (
					<input
						type="number"
						min="0"
						value={selected.qty}
						onChange={handleQtyChange}
						className="border p-1 w-20"
					/>
				)}
			</td>
		</tr>
	);
}
