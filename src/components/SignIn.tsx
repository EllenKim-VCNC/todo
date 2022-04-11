import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "src/service/authService";
import styled from "styled-components";
import { Title, Button, ButtonWrapper, Input, Label } from "./AuthStyles";
interface Props {
  onSignUp: () => void;
}

export const SignIn = ({ onSignUp }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputIdHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(target.value);
  };

  const inputPasswordHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const onClickSignInHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await signIn(username, password);
    if (res.accessToken) {
      alert("sign in! 🥳");
      navigate("/todo");
    }

    // Q. 로그인 실패시 에러처리 방법
    if (res.statusCode === 400) {
      alert(res.message[0]);
    }

    if (res.statusCode === 401) {
      alert(res.message);
    }
  };

  const onClickSignUpHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSignUp();
  };

  return (
    <>
      <Title>🌝 SIGN IN</Title>
      <div>
        <Label htmlFor="username">username</Label>
        <Input id="username" type="text" onChange={inputIdHandler} />
      </div>
      <div>
        <Label htmlFor="password">password</Label>
        <Input id="password" type="password" onChange={inputPasswordHandler} />
      </div>
      <ButtonWrapper>
        <Button onClick={onClickSignInHandler}>sign in</Button>
        <Line />
        Create An Account
        <Button onClick={onClickSignUpHandler} color={"--color__dark"}>
          sign up
        </Button>
      </ButtonWrapper>
    </>
  );
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color__primary);
  opacity: 0.5;
`;
