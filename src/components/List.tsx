import React from "react";
import { Todo } from '../interface';

interface Props {
  text: string;
  id: string;
  removeTodoList: (id:string) => void;
}

export const List: React.FC<Props> = ({ text, id, removeTodoList }) => {
  const removeTodoHandler = () => removeTodoList(id);

  return (
    <li>
      <p>{text}</p>
      <p>{id}</p>
      <button onClick={removeTodoHandler}>삭제</button>
    </li>
  );
};
