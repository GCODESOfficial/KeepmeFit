"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define Form Data Type
interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	interests: string[];
	agreement: boolean;
}

export default function WaitlistPage() {
	const router = useRouter(); // Next.js Router for navigation

	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		interests: [],
		agreement: false,
	});

	const [error, setError] = useState<string | null>(null); // State for validation error

	// Handle Input Changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setFormData((prev) => {
			if (type === "checkbox" && name === "agreement") {
				return { ...prev, agreement: checked };
			} else if (type === "checkbox") {
				return {
					...prev,
					interests: checked
						? [...prev.interests, value]
						: prev.interests.filter((item) => item !== value),
				};
			} else {
				return { ...prev, [name]: value };
			}
		});
	};

	// Handle Form Submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Ensure at least 3 interests are selected
		if (formData.interests.length < 3) {
			setError("Please select at least 3 interests.");
			return;
		}

		// Clear error and proceed with submission
		setError(null);
		console.log(formData);
		router.push("/congratulations"); // Redirect to Congratulations page
	};

	return (
		<div className="relative min-h-screen z-10 flex flex-col bg-gray-100 -mt-7 overflow-hidden pb-10">
			<div className="hidden lg:flex flex-col">
			<div className="relative w-screen h-80 flex bg-gray-100 px-4 py-10">
				{/* Horizontal Gradient with Smooth Blending */}
				<div className="absolute inset-0 w-full h-full">
					<div
						className="absolute z-10 w-96 h-96 rounded-full blur-[60px] -ml-14 -mt-72"
						style={{
							background: "linear-gradient(180deg, #ABD27B 0%, #39854A 100%)",
						}}
					></div>
					<div
						className="absolute inset-0 w-full h-full"
						style={{
							background:
								"linear-gradient(to right, #ededed 75%, #ededed 65%, rgba(208, 230, 181, 0.4) 80%, #d0e6b5 85%)",
						}}
					></div>
				</div>

				<div className="relative left-12 top-14 z-30">
					<h1 className="font-[Nohemi-ExtraBold] text-6xl">Get Started</h1>
					<h1 className="font-[ProductSans] text-[15px]">
						Be one of the first to get access to our Products & Services.
					</h1>
				</div>

				{/* Bottom Fade to Blend into Background */}
				<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100"></div>

				{/* Image with Soft Blending - Placed Behind Navbar */}
				<div className="absolute opacity-95 w-370 -mt-[100px] ml-[400px]">
					<Image
						src="/images/waitlist.png"
						alt="Blended Image"
						width={600}
						height={950}
						className="mix-blend-overlay"
						style={{
							maskImage:
								"radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%)",
							WebkitMaskImage:
								"radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%)",
						}}
					/>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center -mt-24 font-[Inter]">
				<div className="relative z-10 bg-white p-14 pb-10 rounded-4xl min-w-2xl w-11/12">
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<input
								type="text"
								name="firstName"
								placeholder="First name *"
								className="h-10 px-4 rounded-full w-full bg-[#DEF6D5] text-sm focus:outline-none cursor-text relative z-50 pointer-events-auto"
								onChange={handleChange}
								required
							/>

							<input
								type="text"
								name="lastName"
								placeholder="Last name *"
								className="h-10 px-4 rounded-full w-full bg-[#DEF6D5] text-sm focus:outline-none cursor-text relative z-50 pointer-events-auto"
								onChange={handleChange}
								required
							/>
						</div>

						<input
							type="email"
							name="email"
							placeholder="Email *"
							className="h-10 px-4 rounded-full w-full bg-[#DEF6D5] text-sm focus:outline-none cursor-text relative z-50 pointer-events-auto"
							onChange={handleChange}
							required
						/>

						<p className="font-medium pt-14 text-md">What are you interested in? *</p>
						<div className="grid gap-2.5 text-xs">
							{[
								"Nutritional Coaching",
								"Personalized Meal Plans",
								"Health Consultation",
								"Work with Keepme Fit",
								"Corporate Wellness",
								"Use Keepme Fit in Campus",
							].map((interest) => (
								<label key={interest} className="flex items-center space-x-3">
									<input
										type="checkbox"
										name="interests"
										value={interest}
										onChange={handleChange}
										className="appearance-none w-5 h-5 border border-black rounded-full checked:bg-[#9ad699] checked:border-transparent transition-all duration-300"
									/>
									<span>{interest}</span>
								</label>
							))}
						</div>

						{/* Error Message */}
						{error && <p className="text-red-500 text-sm mt-2">{error}</p>}

						<label className="flex items-center space-x-6 text-xs pt-10 tracking-tighter">
							<input
								type="checkbox"
								name="agreement"
								onChange={handleChange}
								className="appearance-none w-5 h-5 shrink-0 border border-black rounded-full checked:bg-[#9ad699] checked:border-transparent transition-all duration-300"
								required
							/>
							<span>
								I agree to receive updates on my waitlist status and other
								communications from Keepme Fit, and I understand Keepme Fit will
								process my personal information in accordance with the Keepme
								Fit&apos;s
								<a href="/privacy-policy" className="text-[#9ad699] ml-1">
									Privacy Policy
								</a>
								.
							</span>
						</label>

						<div className="flex justify-center items-center pt-5">
							<button
								type="submit"
								className="w-4/12 bg-[#A7FD58] py-2 rounded-full text-sm hover:bg-[#A7FD59] transition-all"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>

			</div>


			<div className="lg:hidden">
    {/* Header Section */}
    <div className="relative w-full h-60 flex flex-col items-center bg-gray-100 px-4 py-8 text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 w-full h-full">
            <div
                className="absolute z-10 w-60 h-60 rounded-full blur-[40px] -ml-10 -mt-40"
                style={{
                    background: "linear-gradient(180deg, #ABD27B 0%, #39854A 100%)",
                }}
            ></div>
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background:
                        "linear-gradient(to right, #ededed 70%, rgba(208, 230, 181, 0.4) 85%, #d0e6b5 90%)",
                }}
            ></div>
        </div>

        {/* Title & Description */}
        <div className="relative z-30 w-full px-4">
            <h1 className="font-[Nohemi-ExtraBold] text-4xl">Get Started</h1>
            <p className="font-[ProductSans] text-sm">
                Be one of the first to get access to our Products & Services.
            </p>
        </div>

        {/* Background Blending */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100"></div>

        {/* Image */}
        <div className="absolute opacity-95 w-[250px] mt-10">
            <Image
                src="/images/waitlist.png"
                alt="Blended Image"
                width={250}
                height={400}
                className="mx-auto mix-blend-overlay"
                style={{
                    maskImage: "radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%)",
                    WebkitMaskImage: "radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%)",
                }}
            />
        </div>
    </div>

    {/* Form Section */}
    <div className="flex flex-col justify-center items-center -mt-14 font-[Inter]">
        <div className="relative z-10 bg-white p-6 rounded-3xl w-11/12 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name *"
                        className="h-10 px-4 rounded-full w-full bg-[#DEF6D5] text-sm focus:outline-none"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name *"
                        className="h-10 px-4 rounded-full w-full bg-[#DEF6D5] text-sm focus:outline-none"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Field */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="h-10 px-4 rounded-full w-full bg-[#DEF6D5] text-sm focus:outline-none"
                    onChange={handleChange}
                    required
                />

                {/* Interests Selection */}
                <p className="font-medium pt-4 text-sm">What are you interested in? *</p>
                <div className="grid gap-2.5 text-xs">
                    {[
                        "Nutritional Coaching",
                        "Personalized Meal Plans",
                        "Health Consultation",
                        "Work with Keepme Fit",
                        "Corporate Wellness",
                        "Use Keepme Fit in Campus",
                    ].map((interest) => (
                        <label key={interest} className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                name="interests"
                                value={interest}
                                onChange={handleChange}
                                className="appearance-none w-4 h-4 border border-black rounded-full checked:bg-[#9ad699] checked:border-transparent transition-all duration-300"
                            />
                            <span>{interest}</span>
                        </label>
                    ))}
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

                {/* Agreement Checkbox */}
                <label className="flex items-start space-x-4 text-xs pt-4">
                    <input
                        type="checkbox"
                        name="agreement"
                        onChange={handleChange}
                        className="appearance-none w-4 h-4 border border-black rounded-full checked:bg-[#9ad699] checked:border-transparent transition-all duration-300"
                        required
                    />
                    <span>
                        I agree to receive updates on my waitlist status and other communications from Keepme Fit, and
                        I understand Keepme Fit will process my personal information in accordance with the
                        <a href="/privacy-policy" className="text-[#9ad699] ml-1">
                            Privacy Policy
                        </a>
                        .
                    </span>
                </label>

                {/* Submit Button */}
                <div className="flex justify-center items-center pt-5">
                    <button
                        type="submit"
                        className="w-9/12 bg-[#A7FD58] py-2 rounded-full text-sm hover:bg-[#A7FD59] transition-all"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
			</div>
					</div>
	);
}
