"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

interface GAlertDialogProps {
	triggerLabel: React.ReactNode;
	title?: string;
	description?: string;
	actionText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
	triggerButtonProps?: ButtonProps;
	triggerClassName?: string;
	contentClassName?: string;
	cancelButtonClassName?: string;
	confirmButtonClassName?: string;
}

const GAlertDialog: React.FC<GAlertDialogProps> = ({
	triggerLabel,
	title = "Are you sure?",
	description = "This action cannot be undone.",
	actionText = "Confirm",
	cancelText = "Cancel",
	onConfirm,
	onCancel,
	triggerButtonProps,
	triggerClassName,
	contentClassName,
	cancelButtonClassName,
	confirmButtonClassName,
}) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className={cn(triggerClassName)} {...triggerButtonProps}>
					{triggerLabel}
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className={cn(contentClassName)}>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						className={cn(cancelButtonClassName)}
						onClick={onCancel}
					>
						{cancelText}
					</AlertDialogCancel>
					<AlertDialogAction
						className={cn(confirmButtonClassName)}
						onClick={onConfirm}
					>
						{actionText}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default GAlertDialog;
