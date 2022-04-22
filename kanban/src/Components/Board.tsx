import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragableCard";
import styled from "styled-components";
import { useRef } from "react";

const Wrapper = styled.div`
    width: 300px;
    padding: 10px 0px;
    padding-top: 10px 0d;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) => (props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent")};
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

export default function Board({ toDos, boardId }: IBoardProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    /* ref는 우리의 react 코드를 이용해 HTML요소를 지정하고 가져올 수 있는 방법이다. 
              모든 행동이 자바스크립트로 부터온다.*/

    const onClick = () => {
        inputRef.current?.focus();
        //이런 focus 기능을 쓸 수 있다.
        setTimeout(() => {
            inputRef.current?.blur();
            //blur는 focus가 없어지는 것이다.
        }, 5000);
    };

    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <input ref={inputRef} placeholder="grab me" />
            <button>click me</button>
            <Droppable droppableId={boardId}>
                {(magic, snapshot) => (
                    <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
                        {/* ref는 우리의 react 코드를 이용해 HTML요소를 지정하고 가져올 수 있는 방법이다. */}
                        {toDos.map((toDo, index) => (
                            <DragabbleCard key={toDo} index={index} toDo={toDo} />
                        ))}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}
