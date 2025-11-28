"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon?: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const pathname = usePathname();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Platform</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => {
					const hasChildren = item.items && item.items.length > 0;

					// Parent is active if its URL matches or any child URL matches
					const isActiveParent =
						pathname === item.url ||
						item.items?.some((child) => pathname === child.url);

					if (hasChildren) {
						return (
							<Collapsible
								key={item.title}
								asChild
								defaultOpen={isActiveParent}
								className="group/collapsible"
							>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton
											tooltip={item.title}
											className={`
                        ${
													isActiveParent
														? ""
														: "hover:bg-gray-400 dark:hover:bg-gray-800"
												}
                        transition-colors
                      `}
										>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.items?.map((subItem) => {
												const isActiveChild = pathname === subItem.url;
												return (
													<SidebarMenuSubItem key={subItem.title}>
														<SidebarMenuSubButton asChild>
															<a
																href={subItem.url}
																className={`
                                  flex items-center gap-2 p-1 rounded
                                  ${
																		isActiveChild
																			? "bg-blue-500 text-white dark:bg-blue-600 dark:text-white"
																			: ""
																	}
                                  transition-colors
                                `}
															>
																<span>{subItem.title}</span>
															</a>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												);
											})}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						);
					}

					// Single-line menu item
					const isActiveSingle = pathname === item.url;

					return (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								asChild
								tooltip={item.title}
								className={`
                  ${
										isActiveSingle
											? "bg-blue-500 text-white dark:bg-blue-600 dark:text-white"
											: "hover:bg-gray-400 dark:hover:bg-gray-800"
									}
                  transition-colors
                `}
							>
								<a href={item.url} className="flex items-center gap-2">
									{item.icon && <item.icon />}
									<span>{item.title}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
