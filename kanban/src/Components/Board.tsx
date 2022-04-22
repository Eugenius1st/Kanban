import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragableCard";
import styled from "styled-components";

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
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic, snapshot) => (
                    //snapshot을 오른쪽 마우스로 클릭 후 type defination을 통해 봐보자
                    //isDragging, isDropAnimation, dropAnimation, draggingOver 등등..
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
