import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../interface';

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
  
  const onClickHander = ():void => addTodoList(uuidv4(), text)

  return (
    <div>
      <input value={text} onChange={inputHandler} />
      <button onClick={onClickHander}>추가</button>
    </div>
  );
};
