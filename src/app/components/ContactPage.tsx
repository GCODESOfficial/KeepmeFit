"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="bg-[#f6fbe9] text-[#333333] font-[Urbanist] mt-10 py-20 w-10/12 rounded-xl mx-auto border-[#E5F5BD] border relative">
			<div className="flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap- w-10/12">
					{/* Contact Form */}
					<form onSubmit={handleSubmit} className="space-y-7  text-sm">
						<div className="flex  gap-5">
							<div className="w-full">
								<label className="block font-semibold">Full Name</label>
								<input
									type="text"
									name="fullName"
									value={formData.fullName}
									onChange={handleChange}
									placeholder="Enter your Name"
									className="w-full px-4 py-3 text-xs rounded bg-[#DEF6D5] border-[#E5F5BD] border outline-none"
									required
								/>
							</div>
							<div className="w-full">
								<label className="block font-semibold">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Enter your Email"
									className="w-full px-4 py-3 text-xs rounded bg-[#DEF6D5] border-[#E5F5BD] border outline-none"
									required
								/>
							</div>
						</div>

						<div>
							<label className="block font-semibold">Phone Number</label>
							<input
								type="text"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
								placeholder="Enter your Number"
								className="w-full px-4 py-3 text-xs rounded bg-[#DEF6D5] border-[#E5F5BD] border outline-none"
								required
							/>
						</div>
						<div>
							<label className="block font-semibold">Message</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Enter your Message"
								rows={4}
								maxLength={250}
								className="w-full px-4 py-3 text-xs rounded bg-[#DEF6D5] border-[#E5F5BD] border outline-none"
								required
							></textarea>
							<div className="w-full flex justify-end">
								<h1 className="text-xs">Max 250 Chars</h1>
							</div>
						</div>
						<button
							type="submit"
							className="w-full bg-[#A7FD58] text-black font-bold py-3 rounded-lg "
						>
							Send Message
						</button>
					</form>

					{/* Map & Social Links */}
					<div className="flex flex-col items-end space-y-4">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d7.845!3d4.987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTQuMjjCsDI1JzA3LjciTiA3wrA1MCc1Mi4wIkU!5e0!3m2!1sen!2sng!4v1649254788123"
							width={400}
							height={250}
							style={{
								borderRadius: "10px",
								filter: "invert(100%) hue-rotate(100deg)",
							}}
							allowFullScreen
							loading="lazy"
						></iframe>

						<div className="flex space-x-4 mt-4">
							<a href="#" className="hover:opacity-75 p-3 rounded bg-[#5ABA01]">
								<Image
									src="/images/Facebook.svg"
									alt="Facebook"
									width={20}
									height={20}
								/>
							</a>
							<a href="#" className="hover:opacity-75 p-3 rounded bg-[#5ABA01]">
								<Image
									src="/images/Twitter.svg"
									alt="Twitter"
									width={20}
									height={20}
								/>
							</a>
							<a href="#" className="hover:opacity-75 p-3 rounded bg-[#5ABA01]">
								<Image
									src="/images/LinkedIn.svg"
									alt="LinkedIn"
									width={20}
									height={20}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
