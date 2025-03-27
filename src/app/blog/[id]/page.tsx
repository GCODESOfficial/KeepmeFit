"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface BlogItem {
	title: string;
	image: string;
	intro: string;
	description: string;
	category: string;
	list?: { title: string; description: string }[];
	summary?: string;
}

const BlogDetail = () => {
	const params = useParams();
	const id = params?.id as string | undefined;

	const [blog, setBlog] = useState<BlogItem | null>(null);

	useEffect(() => {
		if (!id || isNaN(Number(id))) return;

		fetch("/blog.json")
			.then((res) => res.json())
			.then((data: BlogItem[]) => {
				const blogIndex = parseInt(id, 10);
				if (blogIndex >= 0 && blogIndex < data.length) {
					setBlog(data[blogIndex]);
				}
			})
			.catch((err) => console.error("Error fetching blog data:", err));
	}, [id]);

	if (!blog) {
		return <p className="text-center text-gray-500">Loading...</p>;
	}

	return (
		<div className="flex flex-col items-center pb-40 w-10/12 mx-auto font-[Urbanist]">
			<div className="bg-[#f6fbe9] w-10/12 hidden lg:block h-[480px] rounded-xl mt-20 border-[#E5F5BD] border flex flex-col items-center relative text-[#333333]">
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
			</div>

      <div className=" lg:hidden pb-10 rounded-xl w-11/12 mt-10 flex flex-col items-center relative text-[#333333]">
					{/* Logo Div Positioned on Top */}

					{/* Background Image */}
					<Image
						src="/images/Abstract Design.svg"
						alt="Background"
						width={500}
						height={500}
						className="object-contain z-0"
					/>

					<div className="text-center mx-auto flex flex-col  -mt-28 z-20 gap-8">
						<h1 className="font-bold text-2xl text-[#262626]">
						Our Blogs
						</h1>
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
          </div>

			<div className="lg:w-10/12 w-11/12">
				<div className="inline-flex font-semibold border-b-2 mt-10 border-[#CBEA7B]">
					{blog.category}
				</div>
			</div>

			<Image
				src={blog.image || "/default-image.jpg"}
				alt={blog.title}
				width={800}
				height={450}
				className="rounded mt-5 lg:w-10/12"
			/>
			<h1 className="font-bold text-[#262626] lg:w-10/12 w-11/12 mt-10">{blog.title}</h1>

			{blog.intro && <p className="mt-8 text-gray-700 lg:w-10/12">{blog.intro}</p>}

			{/* Blog List Section */}
			{blog.list && blog.list.length > 0 && (
				<ol className="list-decimal pl-5 space-y-5 mt-5 lg:w-10/12">
					{blog.list.map((item, index) => (
						<li key={index} className="flex flex-col">
							<span className="font-bold text-lg">
								<span className="mr-2">{index + 1}.</span> {item.title}
							</span>
							<p className="text-gray-700 mt-1">{item.description}</p>
						</li>
					))}
				</ol>
			)}

			{/* Blog Summary Section */}
			{blog.summary && (
				<p className="mt-8 lg:w-10/12 font-semibold">{blog.summary}</p>
			)}
		</div>
	);
};

export default BlogDetail;
