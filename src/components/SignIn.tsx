import { useState } from "react";
import styled from "styled-components";
import { Title } from "./Title";

export const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <SignInWrapper isSignIn={isSignIn}>
        <Title>🌝 SIGN IN</Title>
        <div>
          <Label htmlFor="username">username</Label>
          <Input id="username" type="text" />
        </div>
        <div>
          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" />
        </div>
        <ButtonWrapper>
          <Button>sign in</Button>
          <Line />
          Create An Account
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsSignIn(false);
            }}
          >
            sign up
          </Button>
        </ButtonWrapper>
      </SignInWrapper>

      <SignUpWrapper isSignIn={isSignIn}>
        <Title>🌚 SIGN UP</Title>
        <div>
          <Label htmlFor="username">username</Label>
          <Input id="username" type="text" />
        </div>
        <div>
          <Label htmlFor="password">password</Label>
          <Input id="password" type="password" />
        </div>
        <ButtonWrapper>
          <Button>sign up</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsSignIn(true);
            }}
          >
            back
          </Button>
        </ButtonWrapper>
      </SignUpWrapper>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SignInWrapper = styled(Form)<{ isSignIn: boolean }>`
  display: ${(props) => !props.isSignIn && "none"};
`;

const SignUpWrapper = styled(Form)<{ isSignIn: boolean }>`
  display: ${(props) => props.isSignIn && "none"};
`;

const Input = styled.input`
  width: 100%;
  height: 37.5px;
  padding: 5px 10px;
  border: 2px solid var(--color__primary);
  border-radius: 5px;
  background-color: var(--color__second);
  box-sizing: border-box;
`;

const Label = styled.label`
  color: var(--color__primary);
  font-size: 1.2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color__primary);
  opacity: 0.5;
`;

const Button = styled.button`
  background-color: var(--color__primary);
  border: 1px solid var(--color__primary);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  word-break: keep-all;
  width: 100%;

  &:last-of-type {
    background-color: var(--color__dark);
    border: 1px solid var(--color__dark);
  }
`;