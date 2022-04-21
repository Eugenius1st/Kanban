import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";
//학습목표: input과 selector 연결하기

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    //useRecoilState는 atom값에 더해서 atom을 수정할 함수까지 준다.
    const hours = useRecoilValue(hourSelector);
    //useRecoilValue는 atom 값을 가져온다.
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
        //+를 붙여서 정수형으로 만든다.
    };

    return (
        <div>
            <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />

            <input value={hours} type="number" placeholder="Hours" />
            {/* 기본적인 단위를 바꿔보는 작업을 해보자 
            minutes* 값에 따라 Hours 값을 즉시 바꾸도록 하고싶다.
            기억해봐라 state를 가져와서 그 state를 수정하고 output을 내보낼 때 어떤 것을 사용했나!*/}
            {/* input 을 state로 가져오고 일련의 방법으로 input을 수정했고  수정한 값을  output으로 수정했다,
            그것이 selector 이다. */}
        </div>
    );
}

export default App;
