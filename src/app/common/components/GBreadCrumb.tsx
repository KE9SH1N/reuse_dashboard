"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

export interface BreadcrumbRoute {
	label: string;
	href?: string;
}

interface GBreadcrumbProps {
	items: BreadcrumbRoute[];
	className?: string;
	separator?: React.ReactNode;
}

const GBreadcrumb = ({ items, className, separator }: GBreadcrumbProps) => {
	const lastIndex = items.length - 1;

	return (
		<Breadcrumb className={className}>
			<BreadcrumbList>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					return (
						<React.Fragment key={index}>
							<BreadcrumbItem>
								{isLast || !item.href ? (
									<BreadcrumbPage className="text-black">
										{item.label}
									</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<Link
											href={item.href}
											className="text-gray-400 hover:text-gray-700 hover:no-underline"
										>
											{item.label}
										</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLast && (
								<BreadcrumbSeparator>
									{separator ?? <span className="text-gray-500">/</span>}
								</BreadcrumbSeparator>
							)}
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default GBreadcrumb;
