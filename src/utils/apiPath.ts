import { SERVER_URL } from "../contstnat";

export function getTodoItemPath(id: number){
  return `${SERVER_URL}/todos/${id}`
}

export function getTodoListPath(){
  return `${SERVER_URL}/todos`
}