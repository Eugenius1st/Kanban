import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
    display: flex;
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: grid;
    gap: 10px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
`;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
        if (!destination) return;
        // setToDos((oldToDos) => {
        //     const toDosCopy = [...oldToDos];
        //     toDosCopy.splice(source.index, 1);
        //     toDosCopy.splice(destination?.index, 0, draggableId);

        //     return toDosCopy;
        // });
    };
    //splice는 인덱스를 지우고 넣고싶은 item을 넣을 수 있다.(위치 지정 가능, item넣기 선택 가능)

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
