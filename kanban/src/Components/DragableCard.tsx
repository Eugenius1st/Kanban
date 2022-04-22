import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import React from "react";
const Card = styled.div<{ isDragging: boolean }>`
    border-radius: 5px;
    padding: 10px;
    background-color: ${(props) => (props.isDragging ? "#74b9ff" : props.theme.cardColor)};
    box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none")};
    margin-bottom: 5px;
`;

interface IDragabblecardProps {
    toDoId: number;
    toDoText: string;
    index: number;
}

function DragabbleCard({ toDoId, toDoText, index }: IDragabblecardProps) {
    return (
        <Draggable draggableId={toDoId + ""} index={index}>
            {/* string으로 바꿔준다. */}
            {(magic, snapShot) => (
                <Card isDragging={snapShot.isDragging} ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                    {toDoText}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
