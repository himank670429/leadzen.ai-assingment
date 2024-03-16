import { useState, useRef } from "react";
function Form({ addCurrentTask }) {
	const [desc, setDesc] = useState("");
	const inputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		addCurrentTask(desc);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	}

	return (
		<>
			<h3 className="self-center font-bold text-purple text-xl">Add your todos</h3>
			<form
				onSubmit={handleSubmit}
				className="flex my-6 w-[80%] self-center gap-2"
			>
				<input
					ref={inputRef}
					name='todo_desc'
					id='todo_desc'
					placeholder="Add todos"
					className="p-[1rem] grow rounded-lg bg-slate-200 outline-none"
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button>
					<i className="text-purple text-3xl cursor-pointer fa-solid fa-circle-plus"></i>
				</button>
			</form>{" "}
		</>
	);
}

export default Form;
