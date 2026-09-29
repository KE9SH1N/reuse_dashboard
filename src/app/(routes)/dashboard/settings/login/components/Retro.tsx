"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

const Retro = () => {
	const router = useRouter();
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		router.push("/dashboard/settings/login");
	};
	return (
		<div className="min-h-screen bg-white flex items-center justify-center">
			<div className="border border-black p-10 w-full max-w-sm">
				<h1 className="text-xl font-bold mb-6 text-center">SYSTEM LOGIN</h1>

				<form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
					<input
						className="w-full border border-black px-3 py-2"
						placeholder="Username"
					/>
					<input
						type="password"
						className="w-full border border-black px-3 py-2"
						placeholder="Password"
					/>

					<button className="w-full border border-black py-2 font-semibold hover:bg-black hover:text-white transition">
						LOGIN
					</button>
				</form>
			</div>
		</div>
	);
};

export default Retro;
