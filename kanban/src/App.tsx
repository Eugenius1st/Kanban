import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

//todo State를 위한 atom 만들기

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
    const onDragEnd = ({ destination, source }: DropResult) => {
        //드래그가 끝났을 때 실행되는 함수이다. argument는 많은 정보를 준다.
        //index, destination 등등.. 이는 어디로 가는지 알 수 있다.
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
                                    <Draggable draggableId={toDo} index={index}>
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
