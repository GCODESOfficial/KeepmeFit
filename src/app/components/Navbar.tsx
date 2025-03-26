"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	const isWaitlistPage = pathname === "/waitlist";

	const menuItems = [
		{ name: "Services", link: "/services" },
		{ name: "Pricing", link: "/pricing" },
		{ name: "Blog", link: "/blog" },
	];

	// Prevent body scrolling when menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [menuOpen]);

	return (
		<nav className="fixed top-0 w-full z-30 flex flex-col justify-center items-center font-[ProductSans]">
			{/* Top Banner */}
			<div className="bg-[#13271A] w-full h-[60px] lg:h-[87px] flex items-center justify-center overflow-hidden px-4">
				<div className="flex items-center gap-2 lg:gap-4 text-center">
					<h1 className="text-white text-xs lg:text-xl">
						Get Early Access to Expert Guidance and Tailored Nutrition.
					</h1>
					<button
						className="hidden cursor-pointer lg:block bg-[#A7FD58] text-black text-sm lg:text-base px-4 lg:px-6 py-1 lg:py-2 rounded-full font-semibold"
						onClick={() => router.push("/waitlist")}
					>
						Join Waitlist
					</button>
				</div>
			</div>

			{/* Navbar */}
			<div className={`w-11/12 mx-auto p-3 lg:p-4 rounded-bl-2xl rounded-br-2xl bg-white ${isWaitlistPage ? "w-full" : ""}`}>
				<div className="container mx-auto px-4 flex justify-between items-center h-full">
					{/* Logo */}
					<div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
						<Image
							src="/images/Log.svg"
							alt="Logo"
							width={45}
							height={24}
							className="lg:w-[60px] lg:h-[32px]"
						/>
						<h1 className="font-[Nohemi-SemiBold] text-[#016324] text-sm lg:text-lg">Keepme Fit</h1>
					</div>

					{/* Desktop Navigation */}
					{!isWaitlistPage && (
						<>
							<div className="hidden lg:flex space-x-16 text-gray-700 ">
								{menuItems.map((item) => (
									<div key={item.name} className="text-sm">
										<a 
											href={item.link} 
											className={`transition ${pathname === item.link ? "text-green-500" : "hover:text-green-500"}`}
										>
											{item.name}
										</a>
									</div>
								))}
							</div>

							{/* Buttons & Mobile Menu Toggle */}
							<div className="flex items-center space-x-3 lg:space-x-4">
								<div className="hidden text-sm lg:flex space-x-2">
									<button 
										className="px-3 py-1 lg:px-4 lg:py-2 text-[#44B84F] font-bold border border-[#5ABA01] rounded-full"
										onClick={() => router.push("/contact")}
									>
										Contact Us
									</button>
									<button className="px-4 py-1 lg:px-5 lg:py-2 bg-[#A7FD58] text-black font-bold rounded-full">
										Launch App
									</button>
								</div>

								{/* Mobile Menu Button */}
								<button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
									{menuOpen ? <X size={28} /> : <Menu size={28} />}
								</button>
							</div>
						</>
					)}
				</div>

				{/* Mobile Menu */}
				{!isWaitlistPage && (
					<div
						className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transition-all ease-in-out duration-300 ${
							menuOpen ? "block" : "hidden"
						}`}
						onClick={() => setMenuOpen(false)}
					>
						<div
							className="absolute top-0 left-0 w-4/5 max-w-[280px] h-screen bg-white shadow-lg p-6 flex flex-col space-y-6 transform transition-all ease-in-out duration-300"
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
						>
							{/* Close Button */}
							<button className="self-end" onClick={() => setMenuOpen(false)}>
								<X size={28} />
							</button>

							{/* Menu Items */}
							{menuItems.map((item) => (
								<a
									key={item.name}
									href={item.link}
									className={`block text-gray-700 text-base ${
										pathname === item.link ? "text-green-500" : "hover:text-green-500"
									}`}
									onClick={() => setMenuOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
