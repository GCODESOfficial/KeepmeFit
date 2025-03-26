"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const hideNavbar = pathname === "/congratulations"; // Hide navbar on this route
	const hideFooter = pathname === "/waitlist";

	return (
		<>
			{!hideNavbar && <Navbar />}
			<div className={!hideNavbar ? "mt-[158px]" : ""}>{children}</div>
			{!hideNavbar && !hideFooter && <Footer />}
		</>
	);
}
