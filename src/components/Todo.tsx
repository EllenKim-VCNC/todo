import { useEffect, useState } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import { List } from "./List";
import { TodoInterface } from "../interface";
import { getAllBoards } from "../service/todoService";
import { Title } from "./Title";
import { useNavigate } from "react-router";
import { getCookie } from "src/utils/getCookie";

export const Todo = () => {
  const [todoList, setTodoList] = useState<TodoInterface[]>([]);
  const navigate = useNavigate();

  const getAllTodo = async () => {
    const res = await getAllBoards();

    setTodoList(res);
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  useEffect(() => {
    if (!getCookie("access-token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
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
    </>
  );
};

const TodoListWrapper = styled.ul`
  width: 100%;
`;
