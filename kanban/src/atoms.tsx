import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector({
    key: "hours",
    get: ({ get }) => {
        const minutes = get(minuteState);
        //함수를 가져올 수도 있다.
        return minutes / 60;
    },
    //여기서 어떤 값을 return하던지간에 그 값은 hourSelector의 값이 될 것이다.
});
