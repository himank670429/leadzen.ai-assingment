function Header() {
	return (
		<header className="border-b-2 border-gray-200 flex items-center justify-between px-[3rem] py-[1rem]">
			<img src={import.meta.env.BASE_URL + "logo.png"} className="h-[30px]" />
			<div className="flex gap-2">
				<button className="bg-purple text-white px-[1rem] py-[.4rem] rounded-lg">
					logout
				</button>
				{/* <button className="border-purple border-2 text-purple px-[1rem] py-[.4rem] rounded-lg font-semibold">
					create
				</button> */}
			</div>
		</header>
	);
}

export default Header;
