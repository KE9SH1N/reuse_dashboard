"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

const HackerStyle = () => {
	const router = useRouter();
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		router.push("/dashboard/settings/login");
	};
	return (
		<div className="min-h-screen bg-black flex items-center justify-center">
			<div className="w-full max-w-md text-white">
				<h1 className="text-3xl font-light mb-2">Login</h1>
				<p className="text-white/50 mb-8">Access your account</p>

				<form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
					<div>
						<label className="text-sm text-white/60">Email</label>
						<input className="w-full mt-1 bg-black border-b border-white/30 py-2 focus:outline-none focus:border-white" />
					</div>

					<div>
						<label className="text-sm text-white/60">Password</label>
						<input
							type="password"
							className="w-full mt-1 bg-black border-b border-white/30 py-2 focus:outline-none focus:border-white"
						/>
					</div>

					<button className="w-full border border-white py-2 hover:bg-white hover:text-black transition">
						Enter
					</button>
				</form>
			</div>
		</div>
	);
};

export default HackerStyle;
