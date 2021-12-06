import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import useSWR, { useSWRConfig } from "swr";
import { selectedTodoIdAtom } from "../recoilState";
import { getTodoItemPath, getTodoListPath } from "../utils/apiPath";
import { jsonFetcher } from "../utils/fetcher";

const TodoDetail: React.FC = () => {
	const { mutate } = useSWRConfig();
	const id = useRecoilValue(selectedTodoIdAtom);

	const { data } = useSWR<{
		id: number;
		content: string;
		completed: boolean;
	}>(id ? getTodoItemPath(id) : null, jsonFetcher);

	return (
		<div className="ml-12 p-5 flex-grow bg-blue-50">
			<div className="text-2xl">Todo Detail</div>
			{data ? (
				<div>
					Content: {data.content} <br />
					Completed:{" "}
					<input
						type="checkbox"
						checked={data.completed}
						onChange={async () => {
							await axios.patch(getTodoItemPath(data.id), {
								completed: !data.completed,
							});
							mutate(getTodoItemPath(data.id));
							mutate(getTodoListPath());
						}}
					/>
				</div>
			) : (
				<div>No item to display</div>
			)}
		</div>
	);
};

export default TodoDetail;
