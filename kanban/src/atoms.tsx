import { atom, selector } from "recoil";

interface IToDoState {
    [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To DO": ["a", "b"],
        Doing: ["c", "d"],
        Done: ["e", "f"],
        "Do Later": ["x", "z"],
    },
});
