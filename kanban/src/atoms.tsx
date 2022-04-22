import { atom, selector } from "recoil";

interface IToDoState {
    [key: string]: string[];
}
//우리의 toDo는 object를 가진 array가 되었다.
export interface ITodo {
    id: number;
    text: string;
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To DO": [],
        Doing: [],
        Done: [],
    },
});
