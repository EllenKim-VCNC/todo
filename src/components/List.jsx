import React from "react";

export const List = ({ todo, id, removeTodoList }) => {
  return (
    <li>
      <p>{todo}</p>
      <p>{id}</p>
      <button onClick={() => removeTodoList(id)}>삭제</button>
    </li>
  );
};
