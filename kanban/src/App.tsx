import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//학습목표: 드래그 앤 드롭 리스트를 만들자! npm i react-beautiful-dnd
//Draggable(드래그 할 수 있는 영역) 과 Drappable(드롭할 수 있는 영역)이 있다. DragDropContext을 import 해주자

function App() {
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {(magic) => (
                        <ul ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId="first" index={0}>
                                {(magic) => (
                                    <li ref={magic.innerRef} {...magic.draggableProps}>
                                        <span {...magic.dragHandleProps}>🔥</span>
                                        One
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {(magic) => (
                                    <li ref={magic.innerRef} {...magic.draggableProps}>
                                        <span {...magic.dragHandleProps}>🔥</span>
                                        Two
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default App;
