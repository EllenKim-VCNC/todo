import styled from "styled-components";

export const Title = styled.h1`
  color: var(--color__primary);
`;

export const Input = styled.input`
  width: 100%;
  height: 37.5px;
  padding: 5px 10px;
  border: 2px solid var(--color__primary);
  border-radius: 5px;
  background-color: var(--color__second);
  box-sizing: border-box;
`;

export const Label = styled.label`
  color: var(--color__primary);
  font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
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
