import React from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";
import { selectedTodoIdAtom } from "../recoilState";
import { TodoItem } from "../types";
import { getTodoListPath } from "../utils/apiPath";
import { jsonFetcher } from "../utils/fetcher";

const TodoList: React.FC = () => {
	const setSelectedTodoItemId = useSetRecoilState(selectedTodoIdAtom);
	const { data } = useSWR<TodoItem[]>(getTodoListPath(), jsonFetcher);

	function handleClickItem(id: number) {
		setSelectedTodoItemId(id);
	}

	return (
		<div className="flex-grow overflow-y-scroll">
			<div className="text-2xl">Todo List</div>
			<ul>
				{data ? (
					data.map(({ content, id }) => (
						<li
							className="bg-gray-300 my-2 p-2 cursor-pointer"
							key={content}
							onClick={() => {
								handleClickItem(id);
							}}
						>
							{content}
						</li>
					))
				) : (
					<li>Loading...</li>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
