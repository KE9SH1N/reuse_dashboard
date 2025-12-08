import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface GFormProps {
	methods: UseFormReturn<any>;
	onSubmit: (data: any) => void;
	children: React.ReactNode;
	className?: string;
	onError?: (errors: any) => void;
}

export default function GFormWrapper({
	methods,
	onSubmit,
	children,
	className,
	onError,
}: GFormProps) {
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
				{children}
			</form>
		</FormProvider>
	);
}
