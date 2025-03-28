"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
	const router = useRouter();
	const tips = [
		"All",
		"Weight Loss Tips",
		"Healthy Eating",
		"Mindset and Motivation",
		"Recipes and Meal Planning",
	];

	const Losstips = [
		{
			category: "Weight Loss Tips",
			title: "The Benefits of Hydration",
			description:
				"Discover how staying hydrated can support your weight loss goals and improve overall health.",
			image: "/images/tips 1.svg",
		},
		{
			category: "Weight Loss Tips",
			title: "Cultivating a Healthy Relationship with Food",
			description:
				"Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
			image: "/images/tips 2.svg",
		},
		{
			category: "Weight Loss Tips",
			title: "Prioritizing Your Health",
			description:
				"Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
			image: "/images/tips 3.svg",
		},
		{
			category: "Weight Loss Tips",
			title: "Quick and Nutritious Options",
			description:
				"Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
			image: "/images/tips 4.svg",
		},
		{
			category: "Healthy Eating",
			title: "The Benefits of a Plant-Based Diet for Overall Health",
			description:
				"Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle.",
			image: "/images/tips 5.svg",
		},
		{
			category: "Healthy Eating",
			title: "Understanding Macronutrients: Carbohydrates, Proteins, and Fats",
			description:
				"Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals.",
			image: "/images/tips 6.svg",
		},
		{
			category: "Mindset and Motivation",
			title: "Developing a Positive Body Image and Self-Confidence",
			description:
				"Explore techniques for cultivating a positive body image and improving self-confidence. Learn how to embrace your body and appreciate your unique qualities.",
			image: "/images/tips 7.svg",
		},
		{
			category: "Mindset and Motivation",
			title: "Overcoming Self-Sabotage in Your Weight Loss Journey",
			description:
				"Identify self-sabotaging behaviors and learn strategies to overcome them. Discover how to shift your mindset and develop healthier habits.",
			image: "/images/tips 8.svg",
		},
		{
			category: "Recipes and Meal Planning",
			title: "Healthy and Flavorful Lunch Ideas for a Busy Lifestyle",
			description:
				"Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to make and packed with essential nutrients.",
			image: "/images/tips 9.svg",
		},
		{
			category: "Recipes and Meal Planning",
			title: "Satisfying and Nutritious Dinner Recipes for Weight Loss",
			description:
				"Find a collection of flavorful dinner recipes that are both satisfying and supportive of your weight loss goals. These recipes are designed to be healthy and delicious.",
			image: "/images/tips 10.svg",
		},
	];

	return (
		<div className="flex flex-col items-center lg:pb-40 pb-20 overflow-hidden">
			<div className="bg-[#f6fbe9] lg:w-10/12 hidden h-[480px] rounded-xl mt-20 border-[#E5F5BD] border lg:flex flex-col items-center relative text-[#333333]">
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
					<h1 className="font-bold text-2xl text-[#262626]">Our Blogs</h1>
					<h1 className="text-xs">
						Welcome to the Blog section of Nutritionist, your trusted source for
						insightful articles, tips, and expert advice on nutrition and
						wellness. Here, we strive to provide you with engaging and
						informative content that will inspire and empower you to make
						informed decisions about your health. Explore our blog to discover a
						wealth of resources that cover a wide range of topics related to
						nutrition, fitness, and overall well-being.
					</h1>
				</div>

				<div className="bg-[#5ABA01] rounded-b-xl absolute bottom-0 flex justify-between items-center w-full mx-auto text-xs px-10 py-5">
					{tips.map((tip, index) => (
						<div
							key={index}
							className={`text-center text-white ${
								tip === "All"
									? "border border-white flex justify-center items-center rounded w-8 h-8"
									: ""
							}`}
						>
							{tip}
						</div>
					))}
				</div>
			</div>

			<div className=" lg:hidden pb-10 rounded-xl w-11/12 mt-10 h-[350px] border-[#E5F5BD] border flex flex-col items-center relative text-[#333333]">
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
					<h1 className="font-bold text-2xl text-[#262626]">Our Blogs</h1>
					<h1 className="text-xs">
						Welcome to the Blog section of Nutritionist, your trusted source for
						insightful articles, tips, and expert advice on nutrition and
						wellness. Here, we strive to provide you with engaging and
						informative content that will inspire and empower you to make
						informed decisions about your health. Explore our blog to discover a
						wealth of resources that cover a wide range of topics related to
						nutrition, fitness, and overall well-being.
					</h1>
				</div>

				<div className="bg-[#5ABA01] rounded-b-xl absolute bottom-0 flex justify-between items-center w-full mx-auto text-xs px-10 py-5">
					{tips.slice(0, 3).map((tip, index) => (
						<div
							key={index}
							className={`text-center text-white ${
								tip === "All"
									? "border border-white flex justify-center items-center rounded w-8 h-8"
									: ""
							}`}
						>
							{tip}
						</div>
					))}
				</div>
			</div>

			<div className="bg-[#f6fbe9] font-[Urbanist] mt-10 pt-7 w-10/12 rounded-xl mx-auto border-[#E5F5BD] border relative hidden lg:block ">
				<div className="absolute -12 top-0 left-1/2 transform -translate-x-1/2 h-full border-[0.01px] border-[#E5F5BD] "></div>
				<div className="grid grid-cols-2 gap-3 pb-10">
					{Losstips.map((tip, index) => (
						<React.Fragment key={index}>
							<div key={index} className="bg-[#f6fbe9] px-10 pt-5 rounded-lg">
								<div className="font-semibold text-sm inline-block border-b-2 p-2 border-[#CBEA7B]">
									{tip.category}
								</div>
								<Image
									src={tip.image}
									alt={tip.title}
									width={500}
									height={160}
									className="w-9/12 transform translate-x-4/12 h-40 object-cover rounded-md mt-10"
								/>

								<div className="font-semibold text-sm mt-7 w-8/12">
									{tip.title}
								</div>
								<div className="flex">
									<div className="text-[10px] mt-2 w-8/12">
										{tip.description}
									</div>
									<button
										className="mt-3 px-6 py-3 text-center transform translate-x-4/12 bg-[#A7FD58] text-black text-xs rounded transition font-semibold"
										onClick={() => router.push(`/blog/${index}`)}
									>
										Read More
									</button>
								</div>
							</div>

							{(index + 1) % 2 === 0 && index !== Losstips.length + 1 && (
								<div
									className={`col-span-2 relative ${
										index <= 3 ? "-top-[110px]" : "-top-[133px]"
									}`}
								>
									<hr className="border-0 h-[0.5px] bg-[#E5F5BD] w-full" />
								</div>
							)}

							{/* Conditionally insert an HR after every 2 items */}
							{(index + 1) % 2 === 0 && index !== Losstips.length - 1 && (
								<hr className="border-0 h-[0.5px] bg-[#E5F5BD] w-full col-span-2 " />
							)}
						</React.Fragment>
					))}
				</div>
			</div>

			<div className="bg-[#f6fbe9] font-[Urbanist] lg:hidden mt-10 pt-7 w-11/12 rounded-xl mx-auto border-[#E5F5BD] border relative">
				<div className="flex flex-col gap-6 pb-10">
					{Losstips.map((tip, index) => (
						<div key={index} className="bg-[#f6fbe9] px-5 pt-5 rounded-lg">
							<div className="font-semibold text-xs md:text-sm inline-block border-b-2 p-2 border-[#CBEA7B]">
								{tip.category}
							</div>
							<Image
								src={tip.image}
								alt={tip.title}
								width={400}
								height={140}
								className="w-9/12 transform translate-x-4/12 h-32 md:h-40 object-cover rounded-md mt-5"
							/>
							<div className="font-semibold text-xs md:text-sm mt-5 w-full">
								{tip.title}
							</div>
							<div className="flex flex-col md:flex-row md:items-center mt-2">
								<div className="text-[10px] md:text-xs w-full md:w-8/12">
									{tip.description}
								</div>
								<button
									className="mt-3 px-4 py-2 bg-[#A7FD58] text-black text-xs rounded transition font-semibold"
									onClick={() => router.push(`/blog/${index}`)}
								>
									Read More
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
