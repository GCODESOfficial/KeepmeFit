"use client";
import Image from "next/image";
import ContactPage from "../components/ContactPage";
import { useRouter } from "next/navigation";

const Page = () => {
	const router = useRouter();
	const contacts = [
		{
			icon: "/images/emailfull.svg",
			info: "support@nutritionist.com",
		},
		{
			icon: "/images/callfull.svg",
			info: "+91 00000 00000",
		},
		{
			icon: "/images/location.svg",
			info: "Some Where in the World",
		},
	];
	return (
		<div className="flex flex-col items-center pb-40">
			<div className="bg-[#f6fbe9] w-10/12 h-[600px] rounded-xl mt-20 border-[#E5F5BD] border flex flex-col items-center relative text-[#333333]">
				{/* Logo Div Positioned on Top */}
				<div className="flex items-center gap-2.5 absolute top-28 z-10">
					<Image src="/images/Log.svg" alt="Logo" width={60} height={32} />
					<h1 className="font-[Nohemi-SemiBold] text-[#016324] text-lg">
						Keepme Fit
					</h1>
				</div>

				{/* Background Image */}
				<Image
					src="/images/Abstract Design.svg"
					alt="Background"
					width={500}
					height={500}
					className="object-contain z-0"
				/>

				<div className="text-center w-10/12 flex flex-col gap-3">
					<h1 className="font-bold text-2xl text-[#262626]">Contact Us</h1>
					<h1 className="text-sm">
						We value your feedback, questions, and concerns at Nutritionist. Our
						dedicated team is here to assist you and provide the support you
						need on your nutritional journey. Please don&apos;t hesitate to
						reach out to us using any of the following contact methods
					</h1>
				</div>

				<div className="bg-[#5ABA01] rounded-b-xl absolute bottom-0 flex gap-5 justify-center items-center w-full mx-auto text-xs px-10 py-10">
					{contacts.map((contact, index) => (
						<div
							key={index}
							className="bg-[#f6fbe9] border-[0.5px] border-[#2C5446] px-10 py-5 rounded-lg flex flex-col justify-center items-center gap-4 w-3/12"
						>
							<Image
								src={contact.icon}
								alt={contact.info}
								width={15}
								height={15}
								className=""
							/>

							<h1>{contact.info}</h1>
						</div>
					))}
				</div>
			</div>

			<ContactPage />

			<div className="bg-[#F6FBE9] border-[#E5F5BD] border-[0.5px] py-10 px-10 relative rounded mt-32 flex justify-between w-10/12">
				<div className="absolute bottom-0 right-0">
					<Image
						src="/images/services absract 1.svg"
						alt=""
						width={70}
						height={70}
						className=""
					/>
				</div>
				<div className="absolute top-0 left-0">
					<Image
						src="/images/services absract 2.svg"
						alt=""
						width={70}
						height={70}
						className=""
					/>
				</div>
				<div className=" flex flex-col gap-3">
					<h1 className="font-bold text-lg text-[#262626] w-10/12">
						Are you ready to embark on a transformative journey towards better
						health and wellness?
					</h1>
					<h1 className="text-xs">
						Join us at Nutritionist and let us guide you on the path to a
						healthier and happier you.
					</h1>
				</div>

				<button
					className="px-3 h-10 text-center mt-3 text-sm bg-[#A7FD58] text-black font-bold rounded-md transition"
					onClick={() => router.push("/waitlist")}
				>
					Join Us Now
				</button>
			</div>
		</div>
	);
};

export default Page;
