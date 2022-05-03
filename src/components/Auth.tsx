import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCookie } from "src/utils/getCookie";
import styled from "styled-components";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("access-token")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <AuthWrapper>
      {isSignIn && <SignIn onSignUp={() => setIsSignIn(false)} />}
      {!isSignIn && <SignUp onBack={() => setIsSignIn(true)} />}
    </AuthWrapper>
  );
};

const AuthWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
