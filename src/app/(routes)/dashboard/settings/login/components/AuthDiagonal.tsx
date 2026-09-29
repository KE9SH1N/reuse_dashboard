"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthDiagonal() {
	const router = useRouter();
	const [mode, setMode] = useState<"login" | "register">("login");

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		router.push("/dashboard/settings/login");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="relative w-[900px] h-[520px] overflow-hidden border border-black">
				{/* 🔺 Black Diagonal Background */}
				<div
					className="absolute inset-0 transition-all duration-700 ease-in-out z-0"
					style={{
						clipPath:
							mode === "register"
								? // ? "polygon(0 0, 0% 100%, 100% 100%)" // ABD triangle
								  // : "polygon(100% 0, 100% 100%, 0 100%)", // BCD triangle
								  "polygon(0 0%, 25% 0, 75% 100%, 0% 100%)" // ABCD quadrilateral
								: "polygon(100% 0%, 75% 0, 25% 100%, 100% 100%)", // DCEA quadrilateral
					}}
				>
					<div className="w-full h-full bg-black" />
				</div>

				{/* CONTENT */}
				<div className="relative z-10 flex h-full">
					{/* REGISTER (left side) */}
					<div className="w-1/2 flex items-center justify-center px-12">
						<div
							className={`w-full transition-all duration-500 ${
								mode === "register"
									? "opacity-100 translate-x-0 z-10"
									: "opacity-0 -translate-x-10 pointer-events-none"
							}`}
						>
							<h2 className="text-2xl font-semibold mb-6 text-white">
								Register
							</h2>
							<form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
								<input className="input" placeholder="Name" />
								<input className="input" placeholder="Email" />
								<input
									className="input"
									type="password"
									placeholder="Password"
								/>

								<button className="w-full border border-transparent py-2 bg-black text-white hover:bg-transparent hover:text-white hover:border hover:border-white transition">
									Create Account
								</button>
							</form>

							<p
								onClick={() => setMode("login")}
								className="mt-6 text-sm cursor-pointer underline text-white"
							>
								Login?
							</p>
						</div>
					</div>

					{/* LOGIN (right side) */}
					<div className="w-1/2 flex items-center justify-center px-12">
						<div
							className={`w-full transition-all duration-500 ${
								mode === "login"
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-10 pointer-events-none"
							}`}
						>
							<h2 className="text-2xl text-right mr-2 font-semibold mb-6 text-white">
								Login
							</h2>
							<form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
								<input className="input inverted" placeholder="Email" />
								<input
									className="input inverted"
									type="password"
									placeholder="Password"
								/>

								<button className="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition">
									Login
								</button>
							</form>

							<p
								onClick={() => setMode("register")}
								className="mt-6 text-sm cursor-pointer underline text-white"
							>
								Register?
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* GLOBAL STYLES */}
			<style jsx global>{`
				.input {
					width: 100%;
					padding: 0.6rem;
					border: 1px solid black;
					/* background: transparent; */
					outline: none;
					z-index: 20;
				}
				.input.inverted {
					border: 1px solid white;
					color: white;
				}
				.input::placeholder {
					color: currentColor;
					opacity: 0.6;
				}
			`}</style>
		</div>
	);
}
