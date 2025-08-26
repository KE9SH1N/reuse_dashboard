"use client";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { FC, useEffect, useMemo } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDebounce } from "use-debounce";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { globalFilterTableData } from "./GlobalFilter";
import PaginationControls from "./PaginationControls";

type IDataTableProps<T> = {
	columns: ColumnDef<T, any>[];
	dataSource: T[];
	setSortBy?: (sortBy: string) => void;
	orderBy?: "ASC" | "DESC";
	sortBy?: string;
	paginationOn?: boolean;
	setOrderBy?: (orderBy: "ASC" | "DESC") => void;
	setSelectedRows?: (rows: T[]) => void;
	showRowCheck?: boolean;
	showFooter?: boolean;
	footerData?: Record<string, any>;
	footerColumns?: string[];
	getRowCanSelect?: (row: any) => boolean;
	filterSearchText: any;
	setFilterSearchText: any;
	rowSelection: any;
	setRowSelection: any;
	params: any;
	goToNextPage: any;
	goToPreviousPage: any;
	setPageRange: any;
	setPage: any;
};

const ReactTableV1: FC<IDataTableProps<any>> = ({
	dataSource,
	columns,
	sortBy,
	setSortBy,
	orderBy,
	setOrderBy,
	paginationOn = true,
	showRowCheck = false,
	setSelectedRows,
	filterSearchText,
	setFilterSearchText,
	rowSelection,
	setRowSelection,
	params,
	goToNextPage,
	goToPreviousPage,
	setPageRange,
	setPage,
	// footer
	showFooter = false,
	footerData = {},
	footerColumns = [],
	getRowCanSelect,
}) => {
	const [globalFilter] = useDebounce(filterSearchText, 500);

	const sortedDataSource = useMemo(() => {
		if (!sortBy) return dataSource;
		return [...dataSource].sort((a, b) =>
			orderBy === "ASC"
				? a[sortBy] > b[sortBy]
					? 1
					: -1
				: a[sortBy] < b[sortBy]
				? 1
				: -1
		);
	}, [dataSource, sortBy, orderBy]);

	// track selected rows
	useEffect(() => {
		const selectedRowData = sortedDataSource.filter(
			(_, index) => rowSelection?.[index.toString()]
		);
		setSelectedRows?.(selectedRowData);
	}, [rowSelection]);

	const table = useReactTable({
		data: sortedDataSource,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			globalFilter,
			rowSelection,
		},
		onGlobalFilterChange: setFilterSearchText,
		filterFns: { fuzzy: globalFilterTableData },
		globalFilterFn: globalFilterTableData,
	});

	const handleSorting = (header: any) => {
		const newOrderBy = orderBy === "ASC" ? "DESC" : "ASC";
		setOrderBy?.(newOrderBy);
		setSortBy?.(header.id.toString());
	};

	return (
		<div className="space-y-4">
			{/* Search + pagination top bar */}
			<div className="flex items-center justify-between gap-4">
				<Input
					placeholder="Search..."
					value={filterSearchText}
					onChange={(e) => setFilterSearchText(e.target.value)}
					className="w-64"
				/>

				{paginationOn && (
					<PaginationControls
						page={params.page}
						limit={params.limit}
						total={params.total || 0}
						setPage={setPage}
						setPageRange={setPageRange}
					/>
				)}
			</div>

			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{showRowCheck && (
								<TableHead className="">
									<Checkbox
										checked={table
											.getRowModel()
											.rows.every((row) => rowSelection[row.id])}
										onCheckedChange={(checked) =>
											setRowSelection(
												table.getRowModel().rows.reduce((acc, row) => {
													acc[row.id] = !!checked;
													return acc;
												}, {} as Record<string, boolean>)
											)
										}
									/>
								</TableHead>
							)}
							{headerGroup.headers.map((header) => (
								<TableHead
									key={header.id}
									onClick={() =>
										header.column.columnDef.enableSorting
											? handleSorting(header)
											: undefined
									}
									className={`cursor-pointer select-none`}
								>
									<div className="flex items-center gap-1">
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
										{header.column.columnDef.enableSorting && (
											<>
												<FaChevronUp
													className={`text-xs ${
														orderBy === "ASC" && header.id === sortBy
															? "text-blue-600"
															: "text-gray-400"
													}`}
												/>
												<FaChevronDown
													className={`text-xs ${
														orderBy === "DESC" && header.id === sortBy
															? "text-blue-600"
															: "text-gray-400"
													}`}
												/>
											</>
										)}
									</div>
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>

				<TableBody>
					{table.getRowModel().rows.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{showRowCheck && (
									<TableCell>
										<Checkbox
											checked={!!rowSelection[row.id]}
											onCheckedChange={(checked) =>
												setRowSelection({
													...rowSelection,
													[row.id]: !!checked,
												})
											}
										/>
									</TableCell>
								)}
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No data found
							</TableCell>
						</TableRow>
					)}
				</TableBody>

				{showFooter && (
					<TableFooter>
						<TableRow>
							{showRowCheck && <TableCell />}
							{table.getHeaderGroups()[0].headers.map((header) => {
								const colId = header.id;
								return (
									<TableCell key={colId}>
										{footerColumns.includes(colId) ? footerData[colId] : ""}
									</TableCell>
								);
							})}
						</TableRow>
					</TableFooter>
				)}
			</Table>
		</div>
	);
};

export default ReactTableV1;
