import { useState } from "react";
import { signUp } from "src/service/authService";
import { Title, Button, ButtonWrapper, Input, Label } from "./AuthStyles";

interface Props {
  onBack: () => void;
}

export const SignUp = ({ onBack }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputIdHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(target.value);
  };

  const inputPasswordHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const onClickSignUpHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await signUp(username, password);

    if (res === "Created") {
      setTimeout(() => {
        alert("Create An Account!");
        setUsername("");
        setPassword("");
        onBack();
      }, 1000);
    }

    if (res === "Existing username") {
      alert("Existing username!");
    }
  };

  const onClicBackHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onBack();
  };

  return (
    <>
      <Title>🌚 SIGN UP</Title>
      <div>
        <Label htmlFor="username">username</Label>
        <Input id="username" type="text" onChange={inputIdHandler} />
      </div>
      <div>
        <Label htmlFor="password">password</Label>
        <Input id="password" type="password" onChange={inputPasswordHandler} />
      </div>
      <ButtonWrapper>
        <Button onClick={onClickSignUpHandler}>sign up</Button>
        <Button onClick={onClicBackHandler}>back</Button>
      </ButtonWrapper>
    </>
  );
};
