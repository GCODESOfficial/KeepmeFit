"use client";

import { PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PricingTable from "../components/PricingTable";
import PricingTableMobile from "../components/PricingTableMobile";

const Page = () => {
	const router = useRouter();



	const faqs = [
		{
			question: "What is personalized nutrition coaching?",
			answer:
				"Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
		},
		{ question: "How can nutrition coaching help me lose weight?", answer: "" },
		{
			question:
				"Can I still enjoy my favorite foods while on a nutrition plan?",
			answer: "",
		},
		{
			question: "How often will I have contact with my nutritionist?",
			answer: "",
		},
		{ question: "How long will it take to see results?", answer: "" },
		{
			question:
				"Are the meal plans and recipes provided suitable for vegetarians or vegans?",
			answer: "",
		},
	];

	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="flex flex-col items-center lg:pb-20 pb-10">
			<div className="w-full hidden lg:block">
			<div className="w-10/12 mt-20 flex flex-col items-center relative space-y-5 text-[#333333]">
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

				<div className="text-center w-9/12 flex flex-col gap-4">
					<h1 className="font-bold text-2xl text-[#262626]">Our Pricing</h1>
					<h1 className="text-xs">
						At Nutritionist, we offer flexible pricing options to accommodate
						your unique requirements and budget. Our goal is to provide you with
						exceptional personalized nutrition coaching that is accessible and
						tailored to your needs. Choose from our three plans below and take
						the first step towards a healthier lifestyle
					</h1>
				</div>
			</div>
			</div>

			
			<div className="bg-[#f6fbe9] lg:hidden w-11/12 pb-10 rounded-xl mt-10 border-[#E5F5BD] border flex flex-col items-center relative text-[#333333]">
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
						Our Pricing
						</h1>
						<h1 className="text-xs">
						At Nutritionist, we offer flexible pricing options to accommodate
						your unique requirements and budget. Our goal is to provide you with
						exceptional personalized nutrition coaching that is accessible and
						tailored to your needs. Choose from our three plans below and take
						the first step towards a healthier lifestyle
						</h1>
					</div>
				</div>



			<div className="flex justify-center w-full items-center lg:mt-24 mt-14">
				<div className="lg:flex justify-center">
				<div className="w-11/12 mx-auto lg:hidden drop-shadow-[0_5px_5px_rgba(0,0,0,0.08)] ">
						<Image
							src="/images/pricing1.svg"
							alt="Logo"
							width={700}
							height={700}
						/>
					</div>
					<div className="lg:w-[31.5%] w-11/12 mx-auto flex flex-col gap-10">
						<div className="mt-5">
							<h1
								className="text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#39b54a] to-[#ABD27B] text-xl font-[Nohemi-ExtraBold]"
							>
								STAND ALONE PACKAGE
							</h1>
							<p className="font-semibold">50,000</p>
						</div>

						<p className="text-xs">
							Stand-alone consultation means you may wish not to enrol in any of
							our personal packages. Maybe you want clarity and/or help with
							your health journey only. If you later decide to subscribe to any
							of our packages immediately or within 24 hours of the
							consultation, the amount you paid for the consultation will be
							deducted. This is only for the monthly subscribers.
						</p>
					</div>

					<div className=" hidden lg:block drop-shadow-[0_5px_5px_rgba(0,0,0,0.08)] ">
						<Image
							src="/images/pricing1.svg"
							alt="Logo"
							width={700}
							height={700}
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center w-full items-center mt-20">
				<div className="lg:flex justify-center gap-4">
					<div className="w-11/12 lg:w-[700px] mx-auto drop-shadow-[0_5px_5px_rgba(0,0,0,0.08)] ">
						<Image
							src="/images/pricing 2.svg"
							alt="Logo"
							width={700}
							height={700}
						/>
					</div>

					<div className="lg:w-[31.5%] w-11/12 mx-auto flex flex-col gap-6 mt-14">
						<h1
							className="text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#39b54a] to-[#ABD27B] text-xl font-[Nohemi-ExtraBold]"
						>
							STAND - ALONE FULLY PERSONALIZED MEAL PLAN
						</h1>

						<div className="text-xs flex flex-col gap-10">
							<p>
								This is a 4 weeks personalized meal plan (one-off) where you
								fill a form to let us know everything required for an effective
								and personalized plan that is both effective, satisfies your
								taste buds and prepared with the foods or recipes you love.
							</p>
							<p className="font-semibold">
								You also get a one-time free consultation (15 minutes
								consultation) with a Certified Dietician who also prepares the
								plan for you.
							</p>

							<div className="font-semibold">
								<p>There are 3 categories of pricing for this:</p>
								<ul className="list-decimal list-inside">
									<li>37,000 Naira</li>
									<li>49,000 Naira</li>
									<li>90,000 Naira</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<button
					className="px-6 py-3 text-center bg-[#A7FD58] text-black font-bold rounded w-80 mt-14"
					onClick={() => router.push("/waitlist")}
				>
					Start Now
				</button>
			</div>

			<div className="-mt-20 w-full flex justify-center hidden">
				<PricingTable />
			</div>

			<div className=" flex justify-center lg:hidden">
				<PricingTableMobile />
			</div>

			<section className="bg-[#F7FBEF] py-10 lg:px-20 w-11/12">
				<div className="flex justify-center items-center">
					<div className="text-center lg:w-8/12 flex flex-col gap-4">
						<h1 className="font-bold text-2xl text-[#262626]">FAQ</h1>
						<h1 className="text-sm w-11/12">
							We address commonly asked questions and provide comprehensive
							answers to help you navigate your way through your health and
							wellness journey.
						</h1>
					</div>
				</div>
				<div className="lg:flex mt-14 gap-10 ">
					<div className="lg:w-8/12 mx-auto bg-[#F6FBE9] border-[0.5px] border-[#E5F5BD] text-sm rounded lg:p-10 p-5 ">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="border-b border-[#E5F5BD] last:border-none"
							>
								<button
									className="lg:w-full w-11/12 text-left flex justify-between font-medium items-center py-4 text-gray-800 focus:outline-none"
									onClick={() => toggleFAQ(index)}
								>
									{faq.question}
									<div className="w-7 h-7 bg-[#016324] rounded flex justify-center items-center p-1.5">
										{openIndex === index ? (
											<XIcon className="text-white text-xs " />
										) : (
											<PlusIcon className="text-white text-xs font-normal" />
										)}
									</div>
								</button>
								{openIndex === index && faq.answer && (
									<p className="text-gray-600 text-xs lg:pr-32 pb-4">
										{faq.answer}
									</p>
								)}
							</div>
						))}
					</div>

					{/* Ask a Question Box */}
					<div className="p-6 mt-14 lg:mt-0 text-center bg-[#F6FBE9] border-[0.5px] border-[#E5F5BD] rounded h-72 flex flex-col gap-6 justify-center items-center lg:w-4/12 mx-auto">
						<div className="flex items-center gap-2.5 ">
							<Image src="/images/Log.svg" alt="Logo" width={60} height={32} />
							<h1 className="font-[Nohemi-SemiBold] text-[#016324] text-lg">
								Keepme Fit
							</h1>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="font-semibold text-[#234338] text-xl">
								Ask your question
							</h1>
							<p className="text-gray-700 text-xs tracking-tight">
								Feel Free to Ask questions on anytime
							</p>
						</div>
						<button className="mt-3 px-4 py-2 bg-[#A7FD58] rounded font-semibold text-sm">
							Ask A Question
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Page;