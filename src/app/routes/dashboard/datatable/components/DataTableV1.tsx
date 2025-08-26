"use client";
import ReactTableV1 from "@/app/dtable/components/ReactTableV1";
import { usePagination } from "@/hooks/custom-hooks/usePaginationHandlers";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
type User = {
	id: string;
	name: string;
	email: string;
	role: string;
};

export const columns: ColumnDef<User>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "role",
		header: "Role",
		cell: ({ row }) => (
			<span className="capitalize">{row.getValue("role")}</span>
		),
	},
];

const baseUsers: User[] = [
	{ id: "1", name: "Alice", email: "alice@example.com", role: "admin" },
	{ id: "2", name: "Bob", email: "bob@example.com", role: "user" },
	{ id: "3", name: "Charlie", email: "charlie@example.com", role: "editor" },
];

function generateUsers(count: number): User[] {
	const users: User[] = [];
	for (let i = 0; i < count; i++) {
		const base = baseUsers[i % baseUsers.length]; // cycle through base users
		users.push({
			id: (i + 1).toString(),
			name: `${base.name} ${i + 1}`,
			email: base.email.replace("@", `+${i + 1}@`), // unique email per user
			role: base.role,
		});
	}
	return users;
}

const users = generateUsers(100);

const DataTableV1 = () => {
	const [sortBy, setSortBy] = useState<string | undefined>(undefined);
	const [orderBy, setOrderBy] = useState<"ASC" | "DESC">("ASC");
	const [filterSearchText, setFilterSearchText] = useState("");
	const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
	const [selectedRowData, setSelectedRowData] = useState([{}]);

	// Pagination handlers
	const { params, goToNextPage, goToPreviousPage, setPageRange, setPage } =
		usePagination({
			page: 1,
			limit: 10,
			total: users.length,
		});

	// Optional: Handle selected rows
	const setSelectedRows = (rows: User[]) => {
		console.log("Selected rows:", rows);
		setSelectedRowData(rows);
	};
	return (
		<div className="p-6">
			<div>
				<ReactTableV1
					dataSource={baseUsers || []}
					columns={columns}
					sortBy={sortBy}
					setSortBy={setSortBy}
					orderBy={orderBy}
					setOrderBy={setOrderBy}
					filterSearchText={filterSearchText}
					setFilterSearchText={setFilterSearchText}
					rowSelection={rowSelection}
					setRowSelection={setRowSelection}
					params={params}
					goToNextPage={goToNextPage}
					goToPreviousPage={goToPreviousPage}
					setPageRange={setPageRange}
					setPage={setPage}
					setSelectedRows={setSelectedRows}
					paginationOn={true}
					showRowCheck={true} // if you want checkboxes for row select
					showFooter={false} // or true if you want footer rows
					footerData={{}} // footer data if showFooter=true
					footerColumns={[]} // columns to show in footer
				/>
			</div>
			<h3 className="mt-4 font-semibold">Selected Data</h3>
			<pre className="bg-gray-100 p-2 rounded text-black">
				{JSON.stringify(selectedRowData, null, 2)}
			</pre>
		</div>
	);
};

export default DataTableV1;
