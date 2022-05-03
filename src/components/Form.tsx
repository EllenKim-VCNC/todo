import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {requestAddTodo} from "../store/reducers/todoReducer";

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
}

export const Form: React.FC<Props> = ( ) => {
	const dispatch = useDispatch()
  const [text, setText] = useState<string>("");
  const clearUserInput = () => setText("");

  const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setText(target.value);

  const onClickHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (text === "") return;

		dispatch(requestAddTodo(text))
    clearUserInput();
  };

  return (
    <FormWrapper>
      <InputWrapper value={text} onChange={inputHandler} />
      <AddButton onClick={onClickHandler}>ADD</AddButton>
    </FormWrapper>
  );
};
