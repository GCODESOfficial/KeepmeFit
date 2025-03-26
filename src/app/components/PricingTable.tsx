import React, { useState } from "react";
import Image from "next/image";

type Plan = {
	name: string;
	price: string;
	features: (boolean | number)[];
	badge?: { name: string; img: string } | null; // Optional badge property
};

const PricingTable: React.FC = () => {
	const durations: string[] = ["1 Month", "3 Months", "6 Months", "1 Year"];
	const [selectedDuration, setSelectedDuration] = useState<string>("1 Month");

	const badges = [
		{ name: "Standard", img: "/images/standard.svg" },
		{ name: "Premium", img: "/images/premium.svg" },
		{ name: "Special", img: "/images/special.svg" },
	];

	// Features list
	const featuresList: string[] = [
		"Initial Consultation",
		"Meal Plan (Weeks)",
		"Follow Up Consultation",
		"Personalised Recipe Book",
		"Group Chat Accountability",
		"Personalised Chat with Consultant",
	];

	// Pricing data for different durations
	const pricingData: Record<string, Plan[]> = {
		"1 Month": [
			{
				name: "Standard Plan",
				price: "N47,000",
				features: [true, 2, 1, true, false, false],
				badge: badges[0],
			},
			{
				name: "Premium Plan",
				price: "N90,000",
				features: [true, 2, 2, true, true, false],
				badge: badges[1],
			},
			{
				name: "Special Plan",
				price: "N150,000",
				features: [true, 3, 2, true, true, true],
				badge: badges[2],
			},
		],
		"3 Months": [
			{
				name: "Standard Plan",
				price: "N120,000",
				features: [true, 4, 2, true, true, false],
				badge: badges[0],
			},
			{
				name: "Premium Plan",
				price: "N250,000",
				features: [true, 6, 3, true, true, true],
				badge: badges[1],
			},
			{
				name: "Special Plan",
				price: "N400,000",
				features: [true, 8, 4, true, true, true],
				badge: badges[2],
			},
		],
		"6 Months": [
			{
				name: "Standard Plan",
				price: "N200,000",
				features: [true, 6, 3, true, true, true],
				badge: badges[0],
			},
			{
				name: "Premium Plan",
				price: "N450,000",
				features: [true, 8, 4, true, true, true],
				badge: badges[1],
			},
			{
				name: "Special Plan",
				price: "N700,000",
				features: [true, 10, 5, true, true, true],
				badge: badges[2],
			},
		],
		"1 Year": [
			{
				name: "Standard Plan",
				price: "N350,000",
				features: [true, 10, 5, true, true, true],
				badge: badges[0],
			},
			{
				name: "Premium Plan",
				price: "N800,000",
				features: [true, 12, 6, true, true, true],
				badge: badges[1],
			},
			{
				name: "Special Plan",
				price: "N1,200,000",
				features: [true, 15, 7, true, true, true],
				badge: badges[2],
			},
		],
	};

	return (
		<div className="flex flex-col items-center justify-center px-5 py-10 w-10/12 mt-20 mb-5 font-[Poppins-Regular]">
			{/* Header */}
			<div className="flex justify-between w-full mb-10">
				<div className="w-[55%]">
					<h2 className="text-xl font-bold text-gray-700">
						Purchase & Subscription
					</h2>
					<p className="text-gray-600 text-sm">
						Keep track of your subscription details, update your purchase
						information & control your account payment.
					</p>
				</div>

				{/* Subscription Duration Selector */}
				<div className="flex justify-between items-center rounded-full px-2 space-x-4 bg-[#EBFAD7] h-8 w-4/12">
					{durations.map((duration) => (
						<button
							key={duration}
							onClick={() => setSelectedDuration(duration)}
							className={`  rounded-full text-xs font-semibold w-9/12 h-2/3 ${
								selectedDuration === duration
									? "bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.08)]"
									: ""
							}`}
						>
							{duration}
						</button>
					))}
				</div>
			</div>

			<div className="flex gap-4 w-full bg-white relative">
				{/* Features Table */}
				<div className="w-5/12 mt-4">
					<table className="w-full bg-[#EBFAD7]">
						<thead>
							<tr className="bg-gradient-to-r from-[#39b54a] to-[#ABD27B] text-white h-28">
								<th className="p-4 text-2xl text-left font-bold">
									What You’ll Get
								</th>
							</tr>
						</thead>
						<tbody>
							{featuresList.map((feature, idx) => (
								<tr
									key={idx}
									className={`border-t border-[#E5F5BD] font-[Urbanist] ${
										idx === featuresList.length - 1 ? "border-b" : ""
									}`}
								>
									<td className="p-4">{feature}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pricing Table */}
				<div className="w-full overflow-x-auto mt-4">
					<table className="w-full">
						{/* Table Head */}
						<thead>
							<tr className="text-center">
								{pricingData[selectedDuration].map((plan, index) => (
									<th key={index} className="text-lg h-28">
										{/* Current Plan Label - Kept at the Top */}
										{index === 0 && (
											<span className="absolute top-0  transform -translate-x-1/2 px-2 text-xs text-black rounded font-bold bg-gradient-to-r from-[#39b54a] to-[#ABD27B]">
												Current Plan
											</span>
										)}

										<div className="h-full flex flex-col justify-center items-center text-sm font-semibold">
											{/* Plan Name */}
											<div className="w-full flex gap-2 justify-center items-center h-14 bg-gradient-to-b from-[#ECFFD5] via-[#ECFFD5] to-[#FFFFFF]">
												{plan.badge && (
													<Image
														src={plan.badge?.img}
														alt={plan.badge?.name}
														width={20}
														height={20}
													/>
												)}
												{plan.name}
											</div>
											{/* Plan Price */}
											<div className="w-full font-[Poppins-bold] flex justify-center items-center h-14 bg-gradient-to-b from-[#ABD27B] to-[#FFFFFF]">
												{plan.price}
											</div>
										</div>
									</th>
								))}
							</tr>
						</thead>

						{/* Table Body */}
						<tbody>
							{featuresList.map((_, idx) => (
								<tr
									key={idx}
									className={`${idx === 0 ? "" : "border-t border-[#E5F5BD]"} ${
										idx === featuresList.length - 1 ? "border-b" : ""
									}`}
								>
									{pricingData[selectedDuration].map((plan, index) => (
										<td key={index} className="p-4 text-center">
											{typeof plan.features[idx] === "boolean" ? (
												<Image
													src={
														plan.features[idx]
															? "/images/tick.svg"
															: "/images/cancel.svg"
													}
													alt={plan.features[idx] ? "Yes" : "No"}
													width={20}
													height={20}
													className="mx-auto"
												/>
											) : (
												plan.features[idx]
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PricingTable;
