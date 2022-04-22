import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragableCard";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 300px;
    padding: 20px 10px;
    padding-top: 10px;
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
    background-color: ${(props) => (props.isDraggingOver ? "pink" : props.isDraggingFromThis ? "red" : "skyblue")};
    //div를 떠날때 색깓들을 바꿔준다.
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
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
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic, snapshot) => (
                    //snapshot을 오른쪽 마우스로 클릭 후 type defination을 통해 봐보자
                    //drag의 from부터 to를 알 수 있다.
                    <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
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
