import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Boards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
`;

export default function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = (info: DropResult) => {
        console.log(info);
        const { destination, draggableId, source } = info;
        //info로 부터 받아올 수 있는 녀석들을 다 받아온다.
        if (destination?.droppableId === source.droppableId) {
            // same board movement.같은 보드 안에서 움직였다는 뜻
            setToDos((allBoards) => {
                //array를 복사하는 과정
                const boardCopy = [...allBoards[source.droppableId]];
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, draggableId);
                //다른 destination에 넣어준다
                return {
                    ...allBoards,
                    [source.droppableId]: boardCopy,
                    //다른 모든 board를 가져오고 새로운 board의 copy를 더해주는 것이다.
                };
            });
        }
    };

    return (
        <div></div>
        // <DragDropContext onDragEnd={onDragEnd}>
        //     <Wrapper>
        //         <Boards>
        //             {Object.keys(toDos).map((boardId) => (
        //                 <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
        //             ))}
        //         </Boards>
        //     </Wrapper>
        // </DragDropContext>
    );
}
