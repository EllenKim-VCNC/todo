import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../interface';
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  margin-bottom: 20px;
`

const InputWrapper = styled.input`
  width: calc(100% - 80px);
  width: 100%;
  border: 2px solid var(--color__primary);
  padding: 5px 10px;
  border-radius: 5px 0 0 5px;
`

const AddButton = styled.button`
  background-color: var(--color__primary);
  border: 1px solid var(--color__primary);
  padding: 10px;
  border-radius: 0 5px 5px 0;
  color: #fff;
  display: block;
  word-break: keep-all;
`
  

interface Props {
  todoList: Todo[];
  setTodoList: (todoList: Todo[]) => void;
}

export const Form: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [text, setText] = useState<string>();

  const clearUserInput = () => setText('');

  const addTodoList = (id: string, text: string = '') => {
    if (text === '') return;

    const newTodoList = [...todoList, { id, text }];

    setTodoList(newTodoList);
    clearUserInput();
  };

  const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => setText(target.value);
  
  const onClickHander = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addTodoList(uuidv4(), text)
  }

  return (
    <FormWrapper>
      <InputWrapper value={text} onChange={inputHandler} />
      <AddButton onClick={onClickHander}>추가</AddButton>
    </FormWrapper>
  );
};
