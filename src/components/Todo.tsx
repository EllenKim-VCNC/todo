import { useEffect } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import { List } from "./List";

import { useNavigate } from "react-router";
import { getCookie } from "src/utils/getCookie";
import { Button, Title } from "./AuthStyles";
import {useDispatch, useSelector} from "react-redux";
import {requestAllTodos} from "../store/reducers/todoReducer";

export const Todo = () => {
	const dispatch = useDispatch()
	const todoList: any[] = useSelector(state => (state as any).todos.items)
  const navigate = useNavigate();

  const deleteCookie = () => {
    document.cookie = "access-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    navigate("/");
  };

	useEffect(() => {
		dispatch(requestAllTodos());
	}, []);


  useEffect(() => {
    if (!getCookie("access-token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Title>TODO</Title>
      <Form />
      <TodoListWrapper>
        {todoList.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </TodoListWrapper>
      <Button onClick={deleteCookie} color={"--color__gray"}>
        log out
      </Button>
    </>
  );
};

const TodoListWrapper = styled.ul`
  width: 100%;
`;
