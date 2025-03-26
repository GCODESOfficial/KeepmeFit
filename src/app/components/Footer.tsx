import Image from "next/image";

const links = [
	{ name: "Company", href: "#" },
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact Us", href: "/contact" },
];

const pricingOptions = ["Standard", "Premium", "Special"];

const socials = [
	{ name: "Telegram", link: "https://t.me/yourchannel" },
	{ name: "Instagram", link: "https://instagram.com/yourprofile" },
	{ name: "Facebook", link: "https://facebook.com/yourpage" },
	{ name: "Twitter", link: "https://twitter.com/yourhandle" },
];

const Footer = () => {
	return (
		<div className="bg-[#13271A] w-full lg:h-[457px] lg:flex lg:gap-60 lg:pt-20 pt-8 lg:pb-0 pb-20 lg:px-20 px-10 text-[#CFD3D7] text-sm font-[Roboto-Regular]">
			<div className="flex flex-col gap-5 lg:w-[18%]">
				<div className="flex items-center font-[Nohemi-SemiBold]">
					<Image
						src="/images/footer logo.svg"
						alt="Logo"
						width={40}
						height={32}
					/>
					<h1 className="font-semibold text-[#016324] text-lg">Keepme Fit</h1>
				</div>

				<div className="grid space-y-8 lg:hidden">
					<div className="flex flex-col space-y-5">
						<h2 className="font-bold font-[Raleway-Regular] text-white">
							Join a Newsletter
						</h2>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="p-2 bg-[#FAFDF2] stroke-1 stroke-[#387AE7] text-[#77808B] outline-none"
						/>
						<button className="bg-[#CBEA7B] text-black px-4 py-2 rounded w-20">
							Send
						</button>
					</div>
				</div>


				<div className="flex flex-col gap-5">
					<span className="flex gap-5">
						<Image
							src="/images/location_on.svg"
							alt="Logo"
							width={20}
							height={20}
						/>
						<h1>8819 Ohio St. South Gate, CA 90280</h1>
					</span>

					<span className="flex gap-5">
						<Image src="/images/email.svg" alt="Logo" width={20} height={20} />
						<a href="mailto:support@keepmefit.com">Keepmefit@hello.com</a>
					</span>

					<span className="flex gap-5">
						<Image src="/images/call.svg" alt="Logo" width={20} height={20} />
						<h1>+1 386-688-3295</h1>
					</span>
				</div>
			</div>

			
			<div className="lg:flex grid lg:gap-24 gap-10 pt-5 ">
				<div className="flex flex-col space-y-5">
					{links.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className={`hover:text-green-400 ${
								link.name === "Company"
									? "pointer-events-none font-bold text-white font-[Raleway-Regular]"
									: ""
							}`}
						>
							{link.name}
						</a>
					))}
				</div>

				<div className="flex flex-col space-y-5">
					<h2 className="font-bold font-[Raleway-Regular] text-white">
						Pricing
					</h2>
					{pricingOptions.map((option, index) => (
						<a
							key={index}
							href="/pricing"
							className="hover:text-green-400 cursor-pointer"
						>
							{option}
						</a>
					))}
				</div>

				<div className="flex flex-col space-y-5">
					<h2 className="font-bold font-[Raleway-Regular] text-white">
						Our Social Media
					</h2>
					{socials.map((social, index) => (
						<a
							key={index}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-green-400 cursor-pointer"
						>
							{social.name}
						</a>
					))}
				</div>

				<p className="text-gray-400 lg:hidden"> Copyright KeepmeFit</p>

				<div className="flex-col space-y-8 hidden lg:block">
					<div className="flex flex-col space-y-5">
						<h2 className="font-bold font-[Raleway-Regular] text-white">
							Join a Newsletter
						</h2>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="p-2 bg-[#FAFDF2] stroke-1 stroke-[#387AE7] text-[#77808B] outline-none"
						/>
						<button className="bg-[#CBEA7B] text-black px-4 py-2 rounded w-20">
							Send
						</button>
					</div>
					<p className="text-gray-400 lg:hidden">Copyright KeepmeFit {new Date().getFullYear()}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
