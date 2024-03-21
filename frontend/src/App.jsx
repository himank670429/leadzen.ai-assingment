import Header from "./components/header";
import Footer from "./components/Footer";
import { useAxios, useTodos } from "./context/DataContext";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
	const { todos, setTodos } = useTodos();
	const instance = useAxios();

	const { current, completed } = todos;

	async function markTask(id) {
		const data = (
			await instance.post(
				"/todo/mark",
				{ task_id: id },
				{ headers: { "Content-Type": "application/json" } }
			)
		).data;
		setTodos(data);
	}
	async function unMarkTask(id) {
		const data = (
			await instance.post(
				"/todo/unmark",
				{ task_id: id },
				{ headers: { "Content-Type": "application/json" } }
			)
		).data;
		setTodos(data);
	}
	async function deleteCurrentTask(id) {
		const data = (
			await instance.post(
				"/todo/del",
				{ task_id: id, completed: false },
				{ headers: { "Content-Type": "application/json" } }
			)
		).data;
		setTodos((prev) => ({ ...prev, current: data.current }));
	}
	async function deleteCompletedTask(id) {
		const data = (
			await instance.post(
				"/todo/del",
				{ task_id: id, completed: true },
				{ headers: { "Content-Type": "application/json" } }
			)
		).data;
		setTodos((prev) => ({ ...prev, completed: data.completed }));
	}
	async function addCurrentTask(desc) {
		const data = (
			await instance.post(
				"/todo/create",
				{ desc },
				{
					headers: { "Content-Type": "application/json" },
				}
			)
		).data;
		setTodos((prev) => {
			const updated_todos = structuredClone(prev);
			updated_todos.current.push(data);
			return updated_todos;
		});
	}
	return (
		<div className="container  h-screen flex flex-col">
			<Header />
			<main className="flex grow gap-4 bg-slate-100 p-[3rem] flex-col">
				<h1 className="text-3xl font-bold text-purple flex items-center mb-[1rem] self-center gap-3">
					<i className=" bg-purple p-2 rounded-md text-white fa-solid fa-list-check"></i>
					Todo App Assiggment
				</h1>
				<div className="self-center text-purple font-semibold mb-[2rem] text-center">
					A Web App specially designed for managing and organising your todos. <br />
					The UI of this Todo is inspired by the official website of <br />
					<p className="flex items-center mt-3 justify-center gap-2">
						<a
							className="bg-purple p-2 shadow text-white inline-flex gap-2 rounded-md hover:translate-y-[-2px] transition-transform"
							href="https://leadzen.ai/"
							target="_blank"
						>
							<img src={import.meta.env.BASE_URL + "logo-robot.svg"} className="w-4" />
							leadzen.ai
						</a>
						<a
							className="border-purple shadow border-2 p-2 text-purple inline-flex items-center gap-2 rounded-md hover:translate-y-[-2px] transition-transform"
							href="https://github.com/himank670429/leadzen.ai-assingment"
							target="_blank"
						>
							<i className="fa-brands fa-github"></i>
							source code
						</a>
					</p>
				</div>
				<Form addCurrentTask={addCurrentTask} />
				<div className="grid grid-cols-2 gap-[1rem]">
					<div className="flex flex-col gap-[1rem] bg-slate-200 hover:bg-slate-300 transition-colors p-[1rem] rounded-lg  ">
						<h3 className="text-xl font-bold flex items-center text-purple gap-2">
							<i className="fa-solid fa-bolt"></i>
							Current Tasks
							<i className="fa-solid fa-bolt"></i>
						</h3>
						<div className="h-[400px] overflow-auto scroll-none flex flex-col gap-[1rem]">
							{current.length !== 0 ? (
								current.map((item) => {
									return (
										<Todo
											key={item.id}
											{...item}
											completed={false}
											deleteCurrentTask={deleteCurrentTask}
											markTask={markTask}
										/>
									);
								})
							) : (
								<h1 className="text-5xl font-bold text-purple opacity-[.5] m-[auto]">
									No Current Todos
								</h1>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-[1rem] bg-slate-200 hover:bg-slate-300 transition-colors p-[1rem] rounded-lg">
						<h3 className="text-xl font-bold text-purple flex items-center gap-2">
							<i className="fa-solid fa-check"></i>
							Completed Tasks
							<i className="fa-solid fa-check"></i>
						</h3>
						<div className="h-[400px] overflow-auto scroll-none flex flex-col gap-[1rem]">
							{completed.length !== 0 ? (
								completed.map((item) => {
									return (
										<Todo
											key={item.id}
											{...item}
											completed={true}
											deleteCompletedTask={deleteCompletedTask}
											unMarkTask={unMarkTask}
										/>
									);
								})
							) : (
								<h1 className="text-5xl font-bold text-purple opacity-[.5] m-[auto]">
									No completed Todos
								</h1>
							)}
						</div>
					</div>
				</div>

				<h1 className="text-3xl font-bold text-purple items-center mb-[1rem] flex text-center self-center mt-8">
					Thanks for considering my application <br />
					Have a good day 👋🏼
				</h1>
			</main>
			<Footer />
		</div>
	);
}

export default App;
