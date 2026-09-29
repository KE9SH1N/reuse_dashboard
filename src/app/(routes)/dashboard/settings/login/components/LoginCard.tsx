"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

const LoginCard = () => {
	const router = useRouter();
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		router.push("/dashboard/settings/login");
	};
	return (
		<div className="min-h-screen flex items-center justify-center bg-black text-white">
			<div className="w-full max-w-sm border border-white/20 p-8 rounded-lg">
				<h1 className="text-2xl font-semibold mb-6 text-center">Sign in</h1>

				<form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
					<input
						type="email"
						placeholder="Email"
						className="w-full bg-transparent border border-white/30 px-4 py-2 rounded focus:outline-none focus:border-white"
					/>

					<input
						type="password"
						placeholder="Password"
						className="w-full bg-transparent border border-white/30 px-4 py-2 rounded focus:outline-none focus:border-white"
					/>

					<button className="w-full bg-white text-black py-2 rounded font-medium hover:bg-gray-200 transition">
						Login
					</button>
				</form>

				<p className="text-sm text-center text-white/60 mt-4">
					© 2025 Your Company
				</p>
			</div>
		</div>
	);
};

export default LoginCard;
