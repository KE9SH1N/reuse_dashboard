function Row({ generic, selectedRowData, setSelectedRowData }: any) {
	// Find if this generic is already selected
	const selected = selectedRowData.find(
		(row: any) => row.genericId === generic.genericId
	);

	// Checkbox toggle
	function toggleSelect(e: any) {
		if (e.target.checked) {
			// Add with empty brand + qty
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
			// Remove it
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
					? { ...row, brandId: brand.brandId, brandName: brand.brandName }
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
			<td className="border px-2">
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
			<td className="border px-2">
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
