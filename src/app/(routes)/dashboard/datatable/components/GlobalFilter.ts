import { FilterFn } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
	interface FilterFns {
		fuzzy: FilterFn<any>;
	}

	interface FilterMeta {
		itemRank: {
			passed: boolean;
			rank: number;
		};
	}
}

export const rankItem = (itemValue: any, query: string) => {
	if (typeof itemValue !== "string" && itemValue) {
		itemValue = itemValue?.toString();
	}

	const itemString = itemValue?.toLowerCase();
	const isMatch = itemString?.includes(query);

	// Simple ranking logic: if it matches, rank is 1, otherwise 0.
	return {
		passed: isMatch,
		rank: isMatch ? 1 : 0, // Example rank; adjust as needed
	};
};

export const globalFilterTableData: FilterFn<any> = (
	row,
	columnId,
	value,
	addMeta
) => {
	const query = value.replace(/\s+/g, "").toLowerCase();
	const cellValue = row.getValue(columnId);

	// Rank the cell value based on the query
	const itemRank = rankItem(cellValue, query);

	// Add meta information to the filter
	addMeta({ itemRank });

	// Return whether the item passed the filter criteria
	return itemRank.passed;
};
