import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragableCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

//복사본을 기준으로 새로운 array를 만들고 기존의
//board를 가져다가 넣어준다.

const Wrapper = styled.div`
    width: 300px;
    padding: 10px 0px;
    padding-top: 10px 0d;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
    background-color: ${(props) => (props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent")};
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

const Form = styled.form`
    width: 100%;
    input {
        width: 100%;
    }
`;

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

interface IForm {
    toDo: string;
}

export default function Board({ toDos, boardId }: IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = ({ toDo }: IForm) => {
        //toDo를 받기 위해 atom을 수정하자
        const newToDo = {
            id: Date.now(),
            text: toDo,
        };

        setToDos((allBoards) => {
            return {
                ...allBoards,
                [boardId]: [newToDo, ...allBoards[boardId]],
            };
        });
        setValue("toDo", "");
    };

    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", { required: true })} type="text" placeholder={`Add task on ${boardId}`} />
                {/* submit 할때마다 빈칸을 만든다. */}
            </Form>
            <Droppable droppableId={boardId}>
                {(magic, snapshot) => (
                    <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
                        {toDos.map((toDo, index) => (
                            <DragabbleCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text} />
                        ))}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}
