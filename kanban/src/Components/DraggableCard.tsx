import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import React from "react";

const Board = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`;

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
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {/* key와 draggable은 같아야 한다 */}
            {(magic) => (
                <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
//prop이 변하지  않았다면 다시 렌더링 하지 말라고 하는 뜻이다.
// 움직이는 li 들만 렌더링 된다..!
