import { TodoStatus } from "src/interface";

const URL = "http://localhost:3001/todos";

export const getAllBoards = async () => {
  const data = await fetch(URL, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access-token"),
    }),
  });
  const res = await data.json();

  return res;
};

export const createTodo = async (description: string | undefined) => {
  const data = await fetch(URL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access-token"),
    }),
    body: JSON.stringify({
      title: "TODO",
      description,
    }),
  });
  const res = await data.json();
  return res;
};

export const deleteTodoById = async (id: string) => {
  const data = await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access-token"),
    }),
    body: JSON.stringify({
      id,
    }),
  });

  // Q. Uncaught (in promise) SyntaxError: Unexpected end of JSON input at signUp 에러
  const res = await data.json();
  return res;
};

export const updateTodoStatus = async (id: string, status: TodoStatus) => {
  const data = await fetch(`${URL}/${id}/status`, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access-token"),
    }),
    body: JSON.stringify({
      id,
      status,
    }),
  });

  const res = await data.json();
  return res;
};
