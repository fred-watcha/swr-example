import axios from "axios";

export function jsonFetcher(url:string) {
  return axios.get(url).then(res => res.data)
}