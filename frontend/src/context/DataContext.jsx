import { useState, useEffect, createContext, useContext } from "react";

export const DataContext = createContext();
import axios from "axios";
export default function DataProvider({ children }) {
	const instance = axios.create({ baseURL: import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/" : "" });
	const [todos, setTodos] = useState({
		current: [],
		completed: [],
	});
	useEffect(() => {
		instance.get("/todo").then((res) => setTodos(res.data));
	}, []);
	return (
		<DataContext.Provider
			value={{
				todos,
				setTodos,
				instance,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useTodos() {
	const { todos, setTodos } = useContext(DataContext);
	return { todos, setTodos };
}
export function useAxios() {
	const { instance } = useContext(DataContext);
	return instance;
}
