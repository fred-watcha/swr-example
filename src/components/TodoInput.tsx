import axios from "axios";
import React from "react";
import { useSWRConfig } from "swr";
import { SERVER_URL } from "../contstnat";
import { getTodoListPath } from "../utils/apiPath";

const TodoInput: React.FC = () => {
  const {mutate} = useSWRConfig();

  return <div className="my-4">
    <b>추가할 아이템: </b>
    <input className="border-blue-800 border-2" type="text" onKeyUp={async (e) => {
      if(e.key === "Enter"){
        const value = e.currentTarget.value;
        if(value){
          e.currentTarget.value = "";
          await axios.post(`${SERVER_URL}/todos`, {
            content: value,
            completed: false
          });
          mutate(getTodoListPath())
        }
      }
    }}/>
  </div>;
};

export default TodoInput; 