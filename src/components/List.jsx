import React from "react";

export const List = ({ todo, id, removeTodoList }) => {
  const removeTodoHandler = () => removeTodoList(id);

  return (
    <li>
      <p>{todo}</p>
      <p>{id}</p>
      <button onClick={removeTodoHandler}>삭제</button>
    </li>
  );
};
