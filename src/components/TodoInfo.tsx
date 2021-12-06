import React, { useMemo } from "react";
import useSWR from "swr";
import { TodoItem } from "../types";
import { getTodoListPath } from "../utils/apiPath";
import { jsonFetcher } from "../utils/fetcher";

const TodoInfo: React.FC = () => {
	const { data } = useSWR<TodoItem[]>(getTodoListPath(), jsonFetcher);

	function getInfo(data: TodoItem[]) {
		return `total: ${data.length} / finished: ${
			data.filter((item) => !!item.completed).length
		}`;
	}

	return (
		<div className="my-10">
			<div className="text-2xl">Todo Info</div>
			{data ? <div>{getInfo(data)}</div> : <div>Loading...</div>}
		</div>
	);
};

export default TodoInfo;
