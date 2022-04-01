import { TodoStatus } from "src/interface";

const URL = "http://localhost:3001/todos";

// 질문: 에러처리는 어떻게? => fetch manager
// 질문: service 분리 => hook으로 생성
export const getAllBoards = async () => {
  const data = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await data.json();
  return res;
};

export const createTodo = async (description: string | undefined) => {
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  const res = await data.json();
  return res;
};

export const updateTodoStatus = async (id: string, status: TodoStatus) => {
  const data = await fetch(`${URL}/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      status,
    }),
  });

  const res = await data.json();
  return res;
};
