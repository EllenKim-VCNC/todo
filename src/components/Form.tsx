import React, { useState } from "react";
import { TodoInterface } from "../interface";
import styled from "styled-components";
import { createTodo, getAllBoards } from "src/service/todoService";

const FormWrapper = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const InputWrapper = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 2px solid var(--color__primary);
  border-radius: 5px 0 0 5px;
  background-color: var(--color__second);
`;

const AddButton = styled.button`
  background-color: var(--color__primary);
  border: 1px solid var(--color__primary);
  padding: 10px;
  border-radius: 0 5px 5px 0;
  color: #fff;
  display: block;
  word-break: keep-all;
`;

interface Props {
  setTodoList: (todoList: TodoInterface[]) => void;
}

export const Form: React.FC<Props> = ({ setTodoList }) => {
  const [text, setText] = useState<string>("");
  const clearUserInput = () => setText("");

  const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setText(target.value);

  const createHandler = async (description: string | undefined) => {
    await createTodo(description);
    const res = await getAllBoards();
    setTodoList(res);
  };

  const onClickHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text === "") return;

    createHandler(text);
    clearUserInput();
  };

  return (
    <FormWrapper>
      <InputWrapper value={text} onChange={inputHandler} />
      <AddButton onClick={onClickHandler}>ADD</AddButton>
    </FormWrapper>
  );
};
