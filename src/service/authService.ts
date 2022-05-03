const URL = "http://localhost:3001/auth";

export const signUp = async (username: string, password: string) => {
  const data = await fetch(`${URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const res = await data.json();
  return res;
};

export const signIn = async (username: string, password: string) => {
  const data = await fetch(`${URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const res = await data.json();

  if (res.accessToken) {
    document.cookie = `access-token=${res.accessToken}`;
  }

  return res;
};
