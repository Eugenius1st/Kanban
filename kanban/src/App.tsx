import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

//array를 재 정렬하는 splice

const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
`;

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

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
        if (!destination) return;
        //드래그가 끝났을 때 실행되는 함수이다. argument는 많은 정보를 준다.
        //index, destination 등등.. 이는 어디로 가는지 알 수 있다.
        setToDos((toDosCopy) => {
            //복사해서 기다린다.
            const copyToDos = [...toDosCopy];
            console.log("Delete item on", source.index);
            console.log(toDosCopy);
            toDosCopy.splice(source.index, 1);
            console.log("Deleted item");
            console.log(toDosCopy);
            // 1. delete item on source.index
            copyToDos.splice(source.index, 1);
            // 2.put back the item on the destination.index 도착한 지점에 넣어준다
            console.log("Put back", draggableId, "on ", destination.index);
            toDosCopy.splice(destination?.index, 0, draggableId);
            console.log(toDosCopy);
            return copyToDos;

            // 3.
        });
    };
    //splice는 인덱스를 지우고 넣고싶은 item을 넣을 수 있다.(위치 지정 가능, item넣기 선택 가능)
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    <Droppable droppableId="one">
                        {(magic) => (
                            <Board ref={magic.innerRef} {...magic.droppableProps}>
                                {toDos.map((toDo, index) => (
                                    <Draggable key={toDo} draggableId={toDo} index={index}>
                                        {/* key와 draggable은 같아야 한다 */}
                                        {(magic) => (
                                            <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                                                {toDo}
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {magic.placeholder}
                            </Board>
                        )}
                    </Droppable>
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
