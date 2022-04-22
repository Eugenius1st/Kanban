import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import React from "react";

const Card = styled.div`
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${(props) => props.theme.cardColor};
    margin-bottom: 5px;
`;

interface IDragabblecardProps {
    toDo: string;
    index: number;
}

function DragabbleCard({ toDo, index }: IDragabblecardProps) {
    return (
        <Draggable draggableId={toDo} index={index}>
            {(magic) => (
                <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
