function Todo({
	id,
	desc,
	completed,
	deleteCurrentTask,
	deleteCompletedTask,
	markTask,
	unMarkTask,
}) {
	return (
		<div className="bg-purple text-white flex items-center gap-[1rem] p-[1rem] rounded-lg">
			{completed ? (
				<i
					onClick={() => unMarkTask(id)}
					className="cursor-pointer fa-solid fa-circle-check"
				></i>
			) : (
				<i
					onClick={() => markTask(id)}
					className="cursor-pointer fa-regular fa-circle"
				></i>
			)}
			<span className={`${completed ? "line-through opacity-[.7]" : ""}`}>
				{desc}
			</span>
			<i
				onClick={() => completed ? deleteCompletedTask(id) : deleteCurrentTask(id)}
				className="cursor-pointer ml-auto fa-solid fa-trash"
			></i>
		</div>
	);
}

export default Todo;
