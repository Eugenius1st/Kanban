import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";
//학습목표: set함수를 이용하여 hours도 바꿔보자 !

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);
    // recoilState는 결과로 array를 주는데 array의 첫번째 item은 atom 값이고
    // 두 번재 argument는 atom을 수정하는 함수다.
    // 첫 번째 요소는 get property로부터 return한 값
    // 두 번째 요소는 setProperty를 부르는 함수가 될 것이다.
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    };

    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    };

    return (
        <div>
            <input onChange={onHoursChange} value={minutes} type="number" placeholder="Minutes" />
        </div>
    );
}

export default App;
