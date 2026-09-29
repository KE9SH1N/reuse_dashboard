"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
const SplitScreen = () => {
	const router = useRouter();
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		router.push("/dashboard/settings/login");
	};
	return (
		<div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
			{/* Left */}
			<div className="hidden md:flex items-center justify-center bg-black text-white">
				<h1 className="text-4xl font-bold tracking-wide">YOUR BRAND</h1>
			</div>

			{/* Right */}
			<div className="flex items-center justify-center bg-white text-black">
				<div className="w-full max-w-sm p-8">
					<h2 className="text-2xl font-semibold mb-6">Welcome back</h2>

					<form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
						<input
							className="w-full border border-black/30 px-4 py-2 rounded focus:outline-none focus:border-black"
							placeholder="Email"
						/>
						<input
							type="password"
							className="w-full border border-black/30 px-4 py-2 rounded focus:outline-none focus:border-black"
							placeholder="Password"
						/>
						<button className="w-full bg-black text-white py-2 rounded hover:bg-black/80">
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SplitScreen;
