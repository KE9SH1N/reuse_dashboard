import DashboardLayout from "@/app/common/dashboard_layout/layout/DashboardLayout";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";

const page = () => {
	return (
		<DashboardLayout>
			<div className="p-4 text-lg font-medium flex flex-col items-start justify-center gap-2 underline ">
				<Link href="/login" className="flex items-center text-blue-500">
					Go to Login Card <GrLinkNext />
				</Link>

				<Link
					href="/login/split-screen"
					className="flex items-center text-blue-500"
				>
					Go to Login Split Screen <GrLinkNext />
				</Link>

				<Link
					href="/login/hacker-style"
					className="flex items-center text-blue-500"
				>
					Go to Login Hacker Style <GrLinkNext />
				</Link>
				<Link href="/login/retro" className="flex items-center text-blue-500">
					Go to Login Retro <GrLinkNext />
				</Link>
				<Link
					href="/login/auth-diagonal"
					className="flex items-center text-blue-500"
				>
					Go to Login Auth Diagonal <GrLinkNext />
				</Link>
				<Link
					href="/login/square-auth-shifter"
					className="flex items-center text-blue-500"
				>
					Go to Login Square Auth Shifter <GrLinkNext />
				</Link>
			</div>
		</DashboardLayout>
	);
};

export default page;
