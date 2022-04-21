import { atom, selector } from "recoil";
//학습목표 : set 배우기
export const minuteState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector<number>({
    key: "hours",
    get: ({ get }) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
        //set함수는 2개의 인자를 받는다.
        //1. 수정하고 싶은 recoil atom을 가져오고
        //2. 새로운 값인 minutes를 가져온다
    },
    //set은 state를 set하는 것을 도와주는 속성이다. atom을 수정하는 것을 돕는다.
    //atom은 input으로 부터 온다.
});
