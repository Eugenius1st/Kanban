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
//1. 복사
//         "To DO": ["a", "b"],
// 2. 복사본 변형
////         "To DO": ["b", "a" ]
// 3. 다른 배열도 가져온 후 기존 친구들 옆에 붙여준다.
// "To DO": ["b", "a" ],
// Doing: ["c", "d"],
// Done: ["e", "f"],
