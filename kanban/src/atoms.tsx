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
//source array와 destination array 총 두개를 복사한다.
//1. source: "To Do": ["a",]
//2. destination: Done: ["b", "f"]
// 3. 나머지 board를 return한다.
