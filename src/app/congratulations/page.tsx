"use client";
import { useRouter } from "next/navigation";

const Congratulations = () => {
	const router = useRouter();

	return (
		<div className="flex justify-center items-center h-screen relative overflow-hidden">
			{/* Background Gradients */}
			<div
				className="absolute -top-40 -left-40 z-10 w-96 h-96 blur-3xl rounded-full"
				style={{
					background: "linear-gradient(200deg, #ABD27B 0%, #39854A 100%)",
				}}
			></div>

			<div
				className="absolute -top-20 -right-20 z-10 w-96 h-96 blur-3xl rounded-full"
				style={{
					background: "linear-gradient(200deg, #ABD27B 0%, #FFFFFF 100%)",
				}}
			></div>

			<div
				className="absolute -bottom-80 -right-2 z-10 w-[450px] h-[450px] bg-[#A7FD58] blur-2xl rounded-full"
				style={{ borderRadius: "70% 30% 100% 0% / 79% 19% 81% 21%" }}
			></div>

			{/* Centered Content */}
			<div className="z-20 flex flex-col justify-center items-center text-center">
				<h1 className="text-black lg:text-6xl md:text-3xl font-semibold font-[Nohemi]">
					Congratulations <br /> You&apos;re Now In
				</h1>
				<button
					onClick={() => router.push("/")}
					className="mt-6 px-6 py-2 w-full bg-[#A7FD58] text-black font-semibold font-[ProductSans] rounded-full shadow-md hover:bg-[#cdfd9f] transition-all"
				>
					Return Home
				</button>
			</div>
		</div>
	);
};

export default Congratulations;
