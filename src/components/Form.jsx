import React, { useRef, useState } from "react";

export const Form = ({ todoList, setTodoList }) => {
  const inputRef = useRef();
  const [text, setText] = useState(null);

  const addTodoList = (index, text) => {
    if (text === "") return;

    const newTodoList = [...todoList, { id: index, todo: text }];
    setTodoList(newTodoList);

    inputRef.current.value = "";
  };

  const id = Date.now();

  return (
    <div>
      <input ref={inputRef} onChange={({ target }) => setText(target.value)} />
      <button onClick={() => addTodoList(id, text)}>추가</button>
    </div>
  );
};
