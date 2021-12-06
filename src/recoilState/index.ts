import { atom } from "recoil";

export const selectedTodoIdAtom = atom<null | number>({
  key: "selectedTodoId",
  default: null
})