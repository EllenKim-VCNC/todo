import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Form = ({ todoList, setTodoList }) => {
  const [text, setText] = useState(null);

  const clearUserInput = () => setText("");

  const addTodoList = (index, text) => {
    if (text === "") return;

    const newTodoList = [...todoList, { id: index, todo: text }];

    setTodoList(newTodoList);
    clearUserInput()
  };

  const inputHandler = ({ target }) => setText(target.value)
  const onClickHander = () => addTodoList(uuidv4(), text)

  return (
    <div>
      <input value={text} onChange={inputHandler} />
      <button onClick={onClickHander}>추가</button>
    </div>
  );
};
