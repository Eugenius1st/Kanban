import { atom } from "recoil";

interface IToDoState {
    [key: string]: ITodo[];
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

// ["a", "b"] 이렇게 생긴 배열이 있는데 이는 toDo임과 동시에 draggabled 이기도 했다
// 그래서 ["b", "a"] 하기 쉬웠다. 각 값이 draggableed 이기도 한 동시에 lsit안의 item이기도 했기에
//하지만 이제 이렇게 될 것이다.
//[{text: "hello", id:1}, {text:"hello", id:2}]
//마우스로 위 정보를 움직일 때 받은 정보는 2 이다. 모든 것을 object로 바꾸었기 때문에.. 이것으로는 아무것도 알 수 없다.
//  더 많은 정보를 받아오기 위해선 card가 어디에서 움직이는지 id정보를 받아오고 이를 이용해 toDo의 내용을 받아야 한다.

//즉
//1. 어딘가에 저장 [{text: "hello", id:1}, {text:"hello", id:2}]
//2. 삭제 [{text: "hello", id:1}, ]
//3. 더하기 [{text: "hello", id:2}, ]
