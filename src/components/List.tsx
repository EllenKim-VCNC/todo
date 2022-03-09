import React from "react";
import styled from 'styled-components';

const ListWrapper = styled.li`
  padding: 15px 0;
  border-bottom: 1px dashed var(--color__second);
  word-break: break-all;
`

const RemoveButton = styled.button`
  background-color: var(--color__second);
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  display: block;
  word-break: keep-all;
` 

interface Props {
  text: string;
  id: string;
  removeTodoList: (id:string) => void;
}

export const List: React.FC<Props> = ({ text, id, removeTodoList }) => {
  const removeTodoHandler = () => removeTodoList(id);

  return (
    <ListWrapper>
      <p>{text}</p>
      <RemoveButton onClick={removeTodoHandler}>삭제</RemoveButton>
    </ListWrapper>
  );
};
