import styled from "styled-components";

export const Title: React.FC<{}> = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

const TitleWrapper = styled.h1`
  color: var(--color__primary);
`;
