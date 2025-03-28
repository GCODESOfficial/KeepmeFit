"use client";


import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const Home = () => {

	const router = useRouter();
	

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleTranslated = (event: { item: { index: any; }; page: { size: number; }; }) => {
	  const items = document.querySelectorAll(".owl-item");
	  items.forEach((item) => item.classList.remove("center"));
  
	  const visibleItems = event.item.index;
	  const centerIndex = Math.floor(event.page.size / 2);
	  const centerItem = items[visibleItems + centerIndex];
  
	  if (centerItem) {
		centerItem.classList.add("center");
	  }
	};


	const services = [
		{
			title: "Nutritional Coaching",
			icon: "/images/services1.svg", // Replace with actual icons if needed
		},
		{
			title: "Health Product Recommendation",
			icon: "/images/services2.svg",
		},
		{
			title: "Health Consultation",
			icon: "/images/services3.svg",
		},
		{
			title: "Corporate Wellness Consultation",
			icon: "/images/services4.svg",
		},
		{
			title: "Recipe Development",
			icon: "/images/services5.svg",
		},
		{
			title: "Meal Plan Development",
			icon: "/images/services6.svg",
		},
	];

	const blogs = [
		{
			image: "/images/card 1.svg",
			category: "Weight Loss",
			title: "The Benefits of Hydration",
			description:
				"Discover how staying hydrated can support your weight loss goals and improve overall health.",
		},
		{
			image: "/images/card 2.svg",
			category: "Mindful Eating",
			title: "Cultivating a Healthy Relationship with Food",
			description:
				"Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
		},
		{
			image: "/images/card 3.svg",
			category: "Understanding Macronutrients",
			title: "Prioritizing Your Health",
			description:
				"Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
		},
		{
			image: "/images/card 4.svg",
			category: "Healthy Food on the Go",
			title: "Quick and Nutritious Options",
			description:
				"Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
		},
	];

	const boxes = [
		{ title: "Customized Meal Plans", image: "/images/product 1.svg" },
		{ title: "Health Products", image: "/images/product 2.svg" },
		{ title: "Wellness Kits & Accessories", image: "/images/product 3.svg" },
	];

	const testimonials = [
		{
			name: "Christiana Umoh",
			image: "/images/user1.svg",
			text: "I can't thank KeepmeFit enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
		},
		{
			name: "Robert Johnson",
			image: "/images/user2.svg",
			text: "KeepmeFit has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
		},
		{
			name: "Emily Davis",
			image: "/images/user3.svg",
			text: "I had struggled with my weight for years until I found KeepmeFit. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
		},
	];

	return (
		<div className="flex justify-center overflow-hidden items-center flex-col lg:mt-64 font-[Urbanist]">
			<div className="lg:flex lg:relative lg:w-full lg:h-96 grid justify-center items-center">
				<div className="relative w-11/12 h-[298px] lg:w-[450px] lg:h-[300px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.08)] lg:absolute lg:right-28 mx-auto">
					<Image
						src="/images/Homepage.png"
						alt="Logo"
						width={450}
						height={450}
						className="object-contain"
					/>
				</div>

				<div className="lg:absolute lg:left-28 lg:w-[39%] lg:h-full">
					<div className="flex-col justify-center items-center flex text-base lg:absolute lg:bottom-4 lg:flex-row lg:gap-3">
						<span className="flex w-[102px] lg:w-auto items-center mt-10 lg:mt-0 p-2 lg:p-1 rounded-full bg-[#FAFDF2] border-[#CBEA7B] border-2 lg:border">
							<Image
								src="/images/Image (2).png"
								alt="Logo"
								width={40}
								height={40}
								className="-ml-4 first:ml-0 lg:w-7 lg:h-7"
							/>
							<Image
								src="/images/Image (1).png"
								alt="Logo"
								width={40}
								height={40}
								className="-ml-4 lg:-ml-2.5 lg:w-7 lg:h-7"
							/>
							<Image
								src="/images/Image.png"
								alt="Logo"
								width={40}
								height={40}
								className="-ml-4 lg:-ml-2.5 lg:w-7 lg:h-7"
							/>
						</span>

						<div className="flex flex-col justify-center items-center font-[Urbanist] ">
							<div className="">
								<h1>
									<span className="font-bold text-[#468671]">430+</span>
									<span className="text-[#234338] font-semibold">
										{" "}
										Happy Customers
									</span>
								</h1>
							</div>

							<div className="border-b-4 border-[#CBEA7B] pt-2 pb-2 lg:hidden">
								<h1 className="text-lg font-semibold">
									Transform Your ❤️ Health with
								</h1>
							</div>
						</div>
					</div>

					<div className=" p-5  text-center lg:text-left lg:p-0 lg:flex lg:flex-col lg:gap-5">
						<div className="border-b-2 border-[#CBEA7B] pt-2 pb-2 hidden lg:block w-[60%]">
							<h1 className="text-[16px] font-semibold">
								Transform Your ❤️ Health with Keepmefit
							</h1>
						</div>

						<h1
							className="text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#39b54a] to-[#ABD27B] text-2xl lg:text-4xl font-[Nohemi-ExtraBold]"
						>
							Find Your Perfect Health Balance with Our Care
						</h1>

						<p className="text-[12px] pt-5 lg:pt-0 lg:text-sm font-[Urbanist] ">
							Welcome to Keepmefit, your partner in achieving optimal health.
							Our experts are here to guide you through professional health
							consultation, customized meal plans, and quality health products
							to help you stay fit and healthy. Start your transformation today
							and experience the power of personalized coaching.
						</p>
					</div>
				</div>
			</div>


			
			<div className="flex items-center pt-10 gap-2 lg:gap-4 text-center pb-14 lg:hidden">
					<button
						className=" cursor-pointer bg-[#CBEA7B] text-black text-sm lg:text-base px-4 py-3 rounded font-semibold"
						
					>
						Join Waitlist
					</button>

					<button
						className=" cursor-pointer bg-[#E5F5BD] text-black text-sm lg:text-base px-4 py-3 rounded font-semibold"
						
					>
						Book a Consultation
					</button>
				</div>


			<div className="lg:pt-40 lg:h-[700px] w-full ">
				<div
					className=" w-full lg:px-28 py-16 flex justify-center items-center lg:gap-18 gap-3 relative"
					style={{
						background: "linear-gradient(90deg, #ABD27B 0%, #39854A 100%)",
					}}
				>
					<Image
						src="/images/home image 2.svg"
						alt="Logo"
						width={550}
						height={400}
						className="lg:h-[400px] lg:w-[550px] h-20 w-20"
					/>

					<div className="text-white flex flex-col gap-10 lg:w-[39%] w-[65%]">
						<h1 className="font-bold lg:text-5xl">Who We Are</h1>
						<span className="">
							At KeepMeFit, we believe that health is a lifestyle, not a
							destination. Our mission is to empower individuals to take control
							of their well-being through expert consultation, personalized
							nutrition plans, and premium wellness products.
						</span>
						<span className="">
							We understand that every health journey is unique, which is why we
							take a holistic approach to wellness—helping people find the right
							balance between nutrition, fitness, and overall well-being.
							Whether you&apos;re looking to manage weight, improve your diet,
							address health concerns like diabetes and stroke, or simply live a
							healthier life, KeepMeFit provides the guidance and resources you
							need
						</span>
					</div>
				</div>
			</div>

			<div className="pt-20 font-bold text-2xl text-[#262626]">
				{" "}
				<h1>Our Services</h1>
			</div>

			<div className="w-full overflow-hidden py-10 hidden lg:block">
			<OwlCarousel
          className="owl-theme"
          loop={true}
          nav={true}
          
          responsive={{
            0: {
              items: 1,
              margin: 20
            },
            768: {
              items: 2,
              margin: 30
            },
            1024: {
              items: 3,
              margin: 40
            }
          }}
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
		  onTranslated={handleTranslated}
        >
          {[...services, ...services].map((service, index) => (
            <div
               key={index}
            className="min-w-[250px] lg:min-w-[300px] shadow-md rounded-xl py-14 px-6 flex flex-col items-center justify-center text-center text-xl font-semibold drop-shadow-[0_-5px_5px_rgba(0,0,0,0.08)]"
            >
              {/* Icon Wrapper */}
              <div className="w-16 h-16 p-4 flex items-center justify-center rounded-full bg-[#CBEA7B] mb-3">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={20}
                  height={20}
                />
              </div>
              {service.title}
            </div>
          ))}
        </OwlCarousel>
      </div>



	  <div className="grid justify-between gap-6 px-6 py-14 lg:hidden">
				{services.map((service, index) => (
					 <div
					 key={index}
				  className=" shadow-md bg-white rounded-xl flex flex-col items-center justify-center py-3 px-8 font-semibold drop-shadow-[0_-5px_5px_rgba(0,0,0,0.08)]"
				  >
					{/* Icon Wrapper */}
					<div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CBEA7B] mb-3">
					  <Image
						src={service.icon}
						alt={service.title}
						width={20}
						height={20}
					  />
					</div>
					{service.title}
				  </div>
				))}
			</div>


			<div>
				<button className="px-6 py-3 text-center bg-[#A7FD58] text-black font-bold rounded-full transition"
				onClick={() => router.push("/services")}
				>
					Explore More Services
				</button>
			</div>

			<div className="text-center lg:w-[60%] w-10/12 flex flex-col gap-3">
				<h1 className="pt-20 font-bold text-2xl text-[#262626]">Our Blogs</h1>
				<h1 className="text-sm">
					Our blog is a treasure trove of informative and engaging articles
					written by our team of nutritionists, dietitians, and wellness
					experts. Here&apos;s what you can expect from our blog.
				</h1>
			</div>

			{/* Blog Cards Section */}
			<div className="relative">
				<div
					className="absolute -top-20 -z-20 -left-52 w-96 h-96 blur-3xl rounded-full hidden lg:block"
					style={{
						background: "linear-gradient(200deg, #ABD27B 0%, #FFFFFF 100%)",
					}}
				></div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-6 lg:px-28 z-30">
					{blogs.map((blog, index) => (
						<div
							key={index}
							className="bg-[#F6FBE9] border border-[#EEF8D3] rounded-xl p-5 flex flex-col gap-3"
						>
							<div className="w-full h-[180px] lg:h-[300px] rounded-lg overflow-hidden">
								<Image
									src={blog.image}
									alt={blog.title}
									width={360}
									height={300}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Category */}
							<p className="text-[12px] text-[#333333] font-semibold">
								{blog.category}
							</p>

							{/* Title */}
							<h2 className="font-bold text-[#262626]">{blog.title}</h2>

							{/* Description */}
							<p className="text-[#4C4C4D] text-[12px] leading-relaxed">
								{blog.description}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="pt-12">
				<button className="px-6 py-3 text-center bg-[#A7FD58] text-black font-bold rounded-full transition"
				onClick={() => router.push("/blog")}
				>
					Read More
				</button>
			</div>

			<div className="text-centerw-[60%] hidden lg:flex flex-col gap-3">
				<h1 className="pt-20 font-bold text-2xl text-[#262626]">
					Our Products
				</h1>
				<h1 className="text-sm text-[#333333]">
					Our satisfied clients share their success stories and experiences on
					their journey to better health and well-being.
				</h1>
			</div>

			<div className="lg:grid grid-cols-1 md:grid-cols-3 hidden lg:justify-between justify-center items-center gap-6 px-6 py-14 ">
				{boxes.map((box, index) => (
					<div
						key={index}
						className="lg:w-[335px] h-[330px] flex flex-col justify-center overflow-hidden"
					>
						{/* Image */}
						<div className="w-full h-[80%] ">
							<Image
								src={box.image}
								alt={box.title}
								width={250}
								height={240}
								className="lg:w-full lg:h-full object-cover rounded-xl "
							/>
						</div>

						{/* Title */}
						<h2 className="text-xl font-semibold p-3 text-[#262626]">
							{box.title}
						</h2>
					</div>
				))}
			</div>

			<div className="hidden lg:block">
				<button className="px-6 py-3 text-center bg-[#A7FD58] text-black font-bold rounded-full transition">
					View More
				</button>
			</div>

			<div className="text-center lg:w-[60%] w-10/12 flex flex-col gap-3">
				<h1 className="pt-20 font-bold text-2xl text-[#262626]">
					Our Testimonials
				</h1>
				<h1 className="text-sm text-[#333333]">
					Our satisfied clients share their success stories and experiences on
					their journey to better health and well-being.
				</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-6 mt-14 px-4">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className=" rounded-lg shadow-lg lg:w-[350px] border-2 h-60 pt-6 relative border-[#F6FBE9] flex flex-col gap-6"
					>
						<Image
							src="/images/qoute.svg"
							alt="Service Icon"
							width={25}
							height={25}
							className="mx-[28px]"
						/>

						{/* Testimonial Text */}
						<p className="text-[#333333] text-[12px] px-[28px]">
							{testimonial.text}
						</p>

						{/* User Info */}
						<div className="flex items-center absolute bottom-0 w-full px-[28px] p-4 text-sm gap-3 bg-[#F6FBE9]">
							<Image
								src={testimonial.image}
								alt={testimonial.name}
								width={40}
								height={40}
								className="rounded object-cover border"
							/>
							<span className="font-semibold text-[#1A3129]">
								{testimonial.name}
							</span>
						</div>
					</div>
				))}
			</div>

			<div className="w-full">
				<div className="bg-[#016324] w-full lg:h-[415px] h-[430px] mt-24 relative">
					<Image
						src="/images/community.svg"
						alt="community"
						width={400}
						height={400}
						className="absolute lg:right-30 -right-20 -bottom-20 scale-[0.7] lg:bottom-0 lg:scale-100"
					/>

					<div className="lg:w-[28%] w-[40%] flex flex-col gap-5 text-white absolute lg:top-10 lg:left-40 left-8">
						<h1 className="lg:pt-20 pt-14 font-bold lg:text-4xl text-2xl">
							Join Our Community on Telegram
						</h1>
						<h1 className="text-sm">
							Stay connected with health experts, get wellness tips, and engage
							with like-minded individuals on our Telegram channel.
						</h1>

                        <div>
				<button className="lg:px-6 px-4 py-3 text-sm lg:text-base text-center bg-[#A7FD58] text-black font-bold rounded-md transition">
                Join Our Telegram
				</button>
			</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
