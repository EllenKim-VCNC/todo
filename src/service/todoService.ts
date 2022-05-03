import { TodoStatus } from "src/interface";
import { getCookie } from "src/utils/getCookie";

const URL = "http://localhost:3001/todos";

export const getAllBoards = async () => {
  const data = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("access-token")}`,
    },
  });
  const res = await data.json();
  return res;
};

export const createTodo = async (description: string | undefined) => {
  await fetch(URL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("access-token")}`,
    }),
    body: JSON.stringify({
      title: "TODO",
      description,
    }),
  });
};

export const deleteTodoById = async (id: string) => {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("access-token")}`,
    }),
  });
};

export const updateTodoStatus = async (id: string, status: TodoStatus) => {
  await fetch(`${URL}/${id}/status`, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("access-token")}`,
    }),
    body: JSON.stringify({
      id,
      status,
    }),
  });
};
