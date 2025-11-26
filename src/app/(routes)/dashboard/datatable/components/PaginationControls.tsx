"use client";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { PageLimitSelector } from "./PageLimitSelector";

type PaginationProps = {
	page: number;
	limit: number;
	total: number;
	setPage: (page: number) => void;
	setPageRange: (limit: number) => void;
};

export default function PaginationControls({
	page,
	limit,
	total,
	setPage,
	setPageRange,
}: PaginationProps) {
	const totalPages = Math.ceil(total / limit) || 1;

	// Generate visible page numbers
	const getPageNumbers = () => {
		const pages: (number | "ellipsis")[] = [];
		const maxVisible = 5;

		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			if (page <= 3) {
				pages.push(1, 2, 3, 4, "ellipsis", totalPages);
			} else if (page >= totalPages - 2) {
				pages.push(
					1,
					"ellipsis",
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages
				);
			} else {
				pages.push(
					1,
					"ellipsis",
					page - 1,
					page,
					page + 1,
					"ellipsis",
					totalPages
				);
			}
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-between gap-4">
			{/* Rows per page selector */}
			<PageLimitSelector limit={limit} setPageRange={setPageRange} />
			{/* Pagination bar */}
			<Pagination>
				<PaginationContent>
					{/* First */}
					<PaginationItem>
						<PaginationLink
							onClick={() => setPage(1)}
							isActive={page === 1}
							className="cursor-pointer"
						>
							First
						</PaginationLink>
					</PaginationItem>

					{/* Prev */}
					<PaginationItem>
						<PaginationPrevious
							className="cursor-pointer"
							onClick={() => setPage(Math.max(1, page - 1))}
						/>
					</PaginationItem>

					{/* Page numbers */}
					{getPageNumbers().map((p, idx) =>
						p === "ellipsis" ? (
							<PaginationItem key={`ellipsis-${idx}`}>
								<PaginationEllipsis />
							</PaginationItem>
						) : (
							<PaginationItem key={p}>
								<PaginationLink
									isActive={p === page}
									onClick={() => setPage(p)}
									className="cursor-pointer"
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						)
					)}

					{/* Next */}
					<PaginationItem>
						<PaginationNext
							className="cursor-pointer"
							onClick={() => setPage(Math.min(totalPages, page + 1))}
						/>
					</PaginationItem>

					{/* Last */}
					<PaginationItem>
						<PaginationLink
							onClick={() => setPage(totalPages)}
							isActive={page === totalPages}
							className="cursor-pointer"
						>
							Last
						</PaginationLink>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
