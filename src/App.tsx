import { useEffect, useState } from "react";
import { GlobalStyles } from "./theme/GlobalStyles";
import styled from "styled-components";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Todo } from "./interface";
import { getAllBoards } from "./service/todoService";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: darkcyan;
  padding: 50px 20px;
`;

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

  // 질문: init할 때, useEffect로 불러오는 것이 맞는지?
  // useEffectOnce, react-use
  useEffect(() => {
    getAllTodo();

    return () => {
      // unmount
    };
  }, []);

  return (
    <MainWrapper>
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
    </MainWrapper>
  );
};

export default App;
