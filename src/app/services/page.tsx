"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import PricingTable from "../components/PricingTable";
import PricingTableMobile from "../components/PricingTableMobile";

const Page = () => {
	const router = useRouter();

	const services = [
		{
			id: "01",
			title: "Nutritional Coaching",
			description:
				"Learn the best dietary practices tailored to your body’s needs. Our nutrition experts help you develop healthy eating habits for weight management, disease prevention, and overall wellness.",
			icon: "/images/services1.svg", // Replace with actual icons if needed
		},
		{
			id: "02",
			title: "Health Product Recommendation",
			description:
				"Confused about which supplements or wellness products are best for you? We recommend high-quality, trusted health products from partner brands to complement your wellness journey.",
			icon: "/images/services2.svg",
		},
		{
			id: "03",
			title: "Health Consultation",
			description:
				"Receive expert guidance from certified health professionals and wellness consultants who assess your medical history, lifestyle, and health goals to provide personalized recommendations.",
			icon: "/images/services3.svg",
		},
		{
			id: "04",
			title: "Corporate Wellness Consultation",
			description:
				"We help organizations create healthier workplaces by offering corporate wellness programs, health screenings, and nutritional guidance for employees to boost productivity and well-being.",
			icon: "/images/services4.svg",
		},
		{
			id: "05",
			title: "Recipe Development",
			description:
				"Healthy eating doesn’t have to be boring! Our expert-created recipes provide nutritious, delicious, and easy-to-make meal options, ensuring that eating healthy is both enjoyable and sustainable.",
			icon: "/images/services5.svg",
		},
		{
			id: "06",
			title: "Meal Plan Development",
			description:
				"Say goodbye to generic diet plans! We create customized meal plans based on your nutritional needs, lifestyle, and preferences to support your health goals—whether it’s weight loss, muscle gain, or managing a health condition.",
			icon: "/images/services6.svg",
		},
	];

	return (
		<div className="flex flex-col items-center lg:pb-40 pb-5">
			<div className="lg:w-10/12 w-11/12 lg:mt-20 flex flex-col items-center relative space-y-5 text-[#333333]">
				{/* Logo Div Positioned on Top */}
					<div className="w-full flex hidden lg:block flex-col items-center">
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

						<div className="text-center w-[80%] flex flex-col -mt-5 gap-8">
							<h1 className="font-bold text-2xl text-[#262626]">
								Your Journey to Health and Wellness
							</h1>
							<h1 className="text-xs">
								At Keepmefit, we believe in providing a personalized and
								comprehensive approach to help you achieve your health and
								wellness goals. Our &quot;How it Works&quot; process is designed
								to guide you through each step of your journey, ensuring that
								you receive the support, knowledge, and tools you need to
								succeed. Here&apos;s a detailed breakdown of our process:
							</h1>
						</div>
				</div>

				<div className="bg-[#f6fbe9] lg:hidden pb-10 rounded-xl mt-10 border-[#E5F5BD] border flex flex-col items-center relative text-[#333333]">
					{/* Logo Div Positioned on Top */}

					{/* Background Image */}
					<Image
						src="/images/Abstract Design.svg"
						alt="Background"
						width={500}
						height={500}
						className="object-contain z-0"
					/>

					<div className="text-center w-[90%] flex flex-col  -mt-36 z-20 gap-8">
						<h1 className="font-bold text-2xl text-[#262626]">
							Your Journey to Health and Wellness
						</h1>
						<h1 className="text-xs">
							At Keepmefit, we believe in providing a personalized and
							comprehensive approach to help you achieve your health and
							wellness goals. Our &quot;How it Works&quot; process is designed
							to guide you through each step of your journey, ensuring that you
							receive the support, knowledge, and tools you need to succeed.
							Here&apos;s a detailed breakdown of our process:
						</h1>
					</div>
				</div>

				<Image
					src="/images/services.svg"
					alt="Background"
					width={500}
					height={500}
					className="lg:w-11/12 rounded-2xl lg:rounded-none mt-20 lg:mt-0"
				/>

				<div className="text-center lg:w-[57%] py-10 flex flex-col gap-3 mt-14 lg:mt-0">
					<h1 className="font-bold text-3xl text-[#262626]">How It Works</h1>
					<h1 className="text-xs">
						We provide a step-by-step guide on how to get started on your
						journey towards better health and nutrition. We are here to simplify
						the process and make it easy for you to navigate our platform and
						access the resources you need to achieve your goals. Here&apos;s how
						it works
					</h1>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:w-10/12 md:grid-cols-2 gap-24 lg:px-10 px-5 py-16 font-[Urbanist]">
				{services.map((service, index) => (
					<div key={index} className="relative">
						{/* Number in Background */}
						<span className="absolute -top-[48px] left-0 text-7xl text-[#468671] font-bold z-0">
							{service.id}
						</span>

						{/* Service Card (Above the Number) */}
						<div className="relative z-10 flex flex-col space-x-5 space-y-5 p-10 lg:px-9 px-5 bg-[#DEF6D5] rounded-xl">
							{/* Icon */}
							<div className="flex items-center gap-3">
								<div className="w-10 p-2  bg-[#CBEA7B] flex items-center justify-center rounded-lg">
									<Image
										src={service.icon}
										alt={service.title}
										width={40}
										height={40}
										className="w-full object-contain"
									/>
								</div>
								<h3 className="text-sm font-bold">{service.title}</h3>
							</div>

							{/* Text Content */}
							<div>
								<p className="lg:text-[10px] text-xs mt-1">
									{service.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="mx-auto pt-16 grid justify-center ">
				<h2 className="text-center text-2xl font-bold text-[#4C4C4D] mb-10">
					SUBSCRIPTION PACKAGES
				</h2>
			</div>

			<div className="-mt-20 w-full flex justify-center hidden">
				<PricingTable />
			</div>

			<div className="-mt-20 flex justify-center lg:hidden">
				<PricingTableMobile />
			</div>

			<div className="bg-[#F6FBE9] border-[#E5F5BD] border-[0.5px] py-10 px-10 relative rounded mt-14 flex lg:flex-row flex-col justify-between text-center w-11/12 lg:w-9/12">
				<div className="absolute bottom-0 right-0 ">
					<Image
						src="/images/services absract 1.svg"
						alt=""
						width={70}
						height={70}
						className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]"
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
					<h1 className="font-bold text-lg text-[#262626] lg:w-10/12">
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
