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

  // Q. Uncaught (in promise) SyntaxError: Unexpected end of JSON input at signUp 에러
  // const res = await data.json();

  if (data.status === 201) return "Created";
  if (data.status === 409) return "Existing username";
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

  // Q. 로컬스토리지가 아닌 쿠키를 추천한 이유
  if (res.accessToken) {
    document.cookie = `access-token=${res.accessToken}`;
  }

  return res;
};
