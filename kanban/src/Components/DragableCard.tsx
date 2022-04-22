import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import React from "react";
//우리의 list 에 todo를 추가할 수 있는 form을 만들자 ! 유저가 엔터쳐서 등록하도록..
const Card = styled.div<{ isDragging: boolean }>`
    border-radius: 5px;
    padding: 10px;
    background-color: ${(props) => (props.isDragging ? "#74b9ff" : props.theme.cardColor)};
    box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none")};
    margin-bottom: 5px;
`;

interface IDragabblecardProps {
    toDo: string;
    index: number;
}

function DragabbleCard({ toDo, index }: IDragabblecardProps) {
    return (
        <Draggable draggableId={toDo} index={index}>
            {(magic, snapShot) => (
                <Card isDragging={snapShot.isDragging} ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
