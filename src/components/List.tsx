import React from "react";
import { Todo } from "src/interface";
import { deleteTodoById } from "src/service/todoService";
import styled from "styled-components";

const ListWrapper = styled.li`
  padding: 15px 0;
  border-bottom: 1px dashed var(--color__second);
  word-break: break-all;
`;

const RemoveButton = styled.button`
  background-color: var(--color__second);
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  display: block;
  word-break: keep-all;
`;

interface Props {
  id: string;
  description: string;
  setTodoList: (todoList: Todo[]) => void;
}

export const List: React.FC<Props> = ({ id, description, setTodoList }) => {
  const onClickHandler = async () => {
    const res = await deleteTodoById(id);
    setTodoList(res);
  };

  return (
    <ListWrapper>
      <p>{description}</p>
      <RemoveButton onClick={onClickHandler}>삭제</RemoveButton>
    </ListWrapper>
  );
};
