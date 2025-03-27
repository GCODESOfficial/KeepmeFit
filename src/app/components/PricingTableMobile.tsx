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
		<div className="flex flex-col items-center justify-center px-5 py-10 mt-10 mb-5 font-[Poppins-Regular]">
			{/* Header */}
			<div className="grid justify-between w-full mb-10">
				<div className="mb-14">
					<h2 className="text-xl font-bold">Purchase & Subscription</h2>
					<p className="text-sm">
						Keep track of your subscription details, update your purchase
						information & control your account payment.
					</p>
				</div>

				{/* Subscription Duration Selector */}
				<div className="flex justify-between items-center rounded-full px-2 space-x-3 text-xs bg-[#EBFAD7] h-8">
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

			<div className="">
				<div className=" text-2xl h-20 text-center flex items-center justify-center font-bold bg-gradient-to-r from-[#39b54a] to-[#ABD27B] text-white">
					What You’ll Get
				</div>
				<div className="grid gap-10">
					{pricingData[selectedDuration].map((plan, index) => (
						<div key={index} className="">
							{/* Plan Name */}
							<div className="flex w-full">
								<div className="flex gap-2 justify-center items-center h-10 text-xs w-2/3 bg-gradient-to-b from-[#ECFFD5] via-[#ECFFD5] to-[#FFFFFF]">
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
								<div className="w-1/2 font-[Poppins-bold] flex justify-center items-center bg-gradient-to-b from-[#ABD27B] to-[#FFFFFF]  font-semibold">
									{plan.price}
								</div>
							</div>

							{/* Features List */}
							<table className="mt-4  text-xs">
								<tbody>
									{featuresList.map((feature, idx) => (
										<tr
											key={idx}
											className={
												idx !== featuresList.length - 1
													? "border-b-[1.5px] border-[#C4D796]"
													: ""
											}
										>
											<td className="">{feature}</td>
											<td className="p-2 px-30 pr-0 text-center">
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
										</tr>
									))}
								</tbody>
							</table>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PricingTable;
