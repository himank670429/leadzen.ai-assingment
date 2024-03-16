function Footer() {
	const footerData = {
		Company: ["About Us", "Contact us", "Pricing"],
		Product: ["Platform", "Chrome Extension", "Linkedin Extension"],
		Information: [
			"Privacy Policy",
			"Terms & Conditions",
			"Cookie Policy",
			"Don’t Sell My Info",
			"Opt Out",
			"Terms Of Service",
			"Privacy Centre",
			"Our-Data",
		],
		Resources: ["Blogs"],
	};

	return (
		<footer className="bg-purple h-fit text-white flex p-[4rem] justify-between">
			<section className="flex flex-col gap-4">
				<img src={"https://leadzen.ai/wp-content/uploads/2023/11/image-290.png"} />
				<h2 className="text-2xl font-semibold">Follow us on</h2>
				<div className="flex text-purple gap-4 sm:flex-wrap">
					<i className="bg-yellow p-2 cursor-pointer rounded-full fa-brands fa-facebook"></i>
					<i className="bg-yellow p-2 cursor-pointer rounded-full fa-brands fa-twitter"></i>
					<i className="bg-yellow p-2 cursor-pointer rounded-full fa-brands fa-linkedin"></i>
					<i className="bg-yellow p-2 cursor-pointer rounded-full fa-brands fa-instagram"></i>
					<i className="bg-yellow p-2 cursor-pointer rounded-full fa-brands fa-youtube"></i>
				</div>
			</section>

			{Object.keys(footerData).map((item, index) => (
				<section
					className={`flex flex-col gap-[1rem] md:w-1/4 lg:w-1/5 xl:w-1/6 ${
						index > 0 ? "mt-[4rem] sm:mt-0" : ""
					}`}
					key={index}
				>
					<h2 className="md:text-xl xl:text-2xl font-bold">{item}</h2>
					{footerData[item].map((link, i) => (
						<a key={i} href="#" className="font-medium">
							{link}
						</a>
					))}
				</section>
			))}
		</footer>
	);
}

export default Footer;
