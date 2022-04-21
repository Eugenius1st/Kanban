import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DragabbleCard from "./Components/DraggableCard";

//과도한 rerendering을 막자. react mem를 활용해서.. - > prop이 바뀌면 컴포넌트를 렌더링 하지 말라고 해준다.

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
        setToDos((oldToDos) => {
            const toDosCopy = [...oldToDos];
            toDosCopy.splice(source.index, 1);
            toDosCopy.splice(destination?.index, 0, draggableId);

            return toDosCopy;
        });
    };
    //splice는 인덱스를 지우고 넣고싶은 item을 넣을 수 있다.(위치 지정 가능, item넣기 선택 가능)

    interface IDragabblecardProps {
        toDo: string;
        index: number;
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    <Droppable droppableId="one">
                        {(magic) => (
                            <Board ref={magic.innerRef} {...magic.droppableProps}>
                                {toDos.map((toDo, index) => (
                                    <DragabbleCard key={toDo} index={index} toDo={toDo} />
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
