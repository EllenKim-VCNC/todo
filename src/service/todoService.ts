const URL = "http://localhost:3001/todos";

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
