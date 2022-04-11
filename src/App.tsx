import { GlobalStyles } from "./theme/GlobalStyles";
import styled from "styled-components";
import { Todo } from "./components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth";

export const App: React.FC = () => {
  return (
    <MainWrapper>
      <GlobalStyles />
      <TodoMain>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </TodoMain>
    </MainWrapper>
  );
};

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: darkcyan;
  padding: 50px 20px;
`;

const TodoMain = styled.main`
  position: relative;
  width: 50vw;
  margin: 0 auto;
  background-color: var(--color__second);
  padding: 30px 30px 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px #00000076;
`;
