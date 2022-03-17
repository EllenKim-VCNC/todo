import { useEffect, useState } from "react";
import { GlobalStyles } from "./theme/GlobalStyles";
import styled from "styled-components";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Todo } from "./interface";
import { getAllBoards } from "./service/todoService";

const TodoMain = styled.main`
  position: relative;
  width: 50vw;
  margin: 0 auto;
  background-color: var(--color__second);
  padding: 30px 30px 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px #00000076;
`;

const Title = styled.h1`
  color: var(--color__primary);
`;

const TodoListWrapper = styled.ul`
  width: 100%;
`;

export const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getAllTodo = async () => {
    const res = await getAllBoards();
    setTodoList(res);
  };

  // init할 때, useEffect로 불러오는 것이 맞는지?
  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <>
      <GlobalStyles />
      <TodoMain>
        <Title>TODO</Title>
        <Form todoList={todoList} setTodoList={setTodoList} />
        <TodoListWrapper>
          {todoList.map((list) => (
            <List
              key={list.id}
              list={list}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </TodoListWrapper>
      </TodoMain>
    </>
  );
};

export default App;
