// lib/toast.utils.ts
import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info" | "loading";

interface ShowToastProps {
	type?: ToastType;
	title: string;
	description?: string;
	actionLabel?: string;
	onAction?: () => void;
}

export const showToast = ({
	type,
	title,
	description,
	actionLabel,
	onAction,
}: ShowToastProps) => {
	const toastProps = {
		description,
		action:
			actionLabel && onAction
				? {
						label: actionLabel,
						onClick: onAction,
				  }
				: undefined,
	};

	switch (type) {
		case "success":
			toast.success(title, toastProps);
			break;
		case "error":
			toast.error(title, toastProps);
			break;
		case "warning":
			toast.warning(title, toastProps);
			break;
		case "info":
			toast.info(title, toastProps);
			break;
		case "loading":
			toast.loading(title, toastProps);
			break;
		default:
			toast(title, toastProps);
	}
};
