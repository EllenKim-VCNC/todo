const URL = "http://localhost:3001/auth";

// 여러가지 타입 정리
enum dataStatus {
  "Created" = 201,
  "Existing username" = 409,
}

const whiteList = [
  [201, "Created"],
  [409, "Existing username"],
];

// <string, string>
const whiteList2: Record<dataStatus, string> = {
  [dataStatus.Created]: "Created",
  [dataStatus["Existing username"]]: "Existing username",
};

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
  // server에서 json으로 받지 못함
  // const res = await data.json();

  // 방법1.
  // for (const [statusCode, statusMessage] of whiteList) {
  //   if (statusCode === data.status) {
  //     return statusMessage;
  //   }
  // }

  // 방법2.
  if (whiteList2[data.status]) {
    return whiteList2[data.status];
  }

  // if (data.status === 201) return "Created";
  // if (data.status === 409) return "Existing username";
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
  // expired 설정 가능
  if (res.accessToken) {
    document.cookie = `access-token=${res.accessToken}`;
  }

  return res;
};
