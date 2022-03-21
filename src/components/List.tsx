import React from "react";
import { Todo, TodoStatus } from "src/interface";
import { deleteTodoById, updateTodoStatus } from "src/service/todoService";
import styled, { css } from "styled-components";

const ListWrapper = styled.li`
  padding: 30px 0;
  border-bottom: 1px solid #c6c6c6;
  word-break: break-all;

  &:last-of-type {
    border-bottom: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  padding: 8px;
  border-radius: 50px;
  font-size: 12px;
  background-color: var(--color__second);
  color: #4e4e4e;

  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;

  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  }
`;

const TextWrapper = styled.p<{ status: TodoStatus }>`
  ${({ status }) => css`
    margin-right: 10px;

    -webkit-tap-highlight-color: transparent;

    ${status === TodoStatus.OPEN &&
    css`
      color: var(--color__open);
    `}

    ${status === TodoStatus.IN_PROGRESS &&
    css`
      color: var(--color__primary);
      font-weight: 700;
    `}

    ${status === TodoStatus.DONE &&
    css`
      color: var(--color__primary);
      text-decoration: line-through;
    `}
  `}
`;

const ProgressButton = styled(StyledButton)<{ status: boolean }>`
  ${({ status }) => css`
    margin-right: 10px;

    -webkit-tap-highlight-color: transparent;

    ${status &&
    css`
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
        -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
        inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    `}
  `}
`;

interface Props {
  list: Todo;
  todoList: Todo[];
  setTodoList: (todoList: Todo[]) => void;
}

export const List: React.FC<Props> = ({ list, todoList, setTodoList }) => {
  const { id, description, status } = list;

  const onClickUpdateHandler = async (status: TodoStatus) => {
    const res = await updateTodoStatus(id, status);

    const newTodoList = todoList.map((list) =>
      list.id === res.id ? res : list
    );

    setTodoList(newTodoList);
  };

  const onClickDeleteHandler = async () => {
    const res = await deleteTodoById(id);
    setTodoList(res);
  };

  return (
    <ListWrapper>
      <TextWrapper status={status}>{description}</TextWrapper>

      <ButtonWrapper>
        <div>
          <ProgressButton
            status={TodoStatus.OPEN === status}
            onClick={() => onClickUpdateHandler(TodoStatus.OPEN)}
          >
            OPEN
          </ProgressButton>
          <ProgressButton
            status={TodoStatus.IN_PROGRESS === status}
            onClick={() => onClickUpdateHandler(TodoStatus.IN_PROGRESS)}
          >
            IN PROGRESS
          </ProgressButton>
          <ProgressButton
            status={TodoStatus.DONE === status}
            onClick={() => onClickUpdateHandler(TodoStatus.DONE)}
          >
            DONE
          </ProgressButton>
        </div>
        <StyledButton onClick={onClickDeleteHandler}>🗑</StyledButton>
      </ButtonWrapper>
    </ListWrapper>
  );
};
