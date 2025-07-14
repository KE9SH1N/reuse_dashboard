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

export interface BreadcrumbRoute {
	label?: string;
	href?: string;
}

interface GBreadcrumbProps {
	items: BreadcrumbRoute[];
	className?: string;
}

const GBreadcrumb = ({ items, className }: GBreadcrumbProps) => {
	const lastIndex = items.length - 1;

	return (
		<Breadcrumb className={className}>
			<BreadcrumbList>
				{items?.map((item, index) => (
					<div key={index} className="flex items-center text-white">
						<BreadcrumbItem>
							{index === lastIndex || !item.href ? (
								<BreadcrumbPage className="text-white">
									{item.label}
								</BreadcrumbPage>
							) : (
								<BreadcrumbLink asChild className="">
									<Link
										href={item.href}
										className="hover:underline-none hover:text-inherit text-gray-400"
									>
										{item.label}
									</Link>
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>

						{index < lastIndex && <BreadcrumbSeparator />}
					</div>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default GBreadcrumb;
