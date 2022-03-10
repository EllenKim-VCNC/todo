import { useState } from 'react';
import { GlobalStyles } from './theme/GlobalStyles';
import styled from 'styled-components'
import { Form } from './components/Form';
import { List } from './components/List';
import { Todo } from './interface';

const TodoMain = styled.main`
  position: relative;
  width: 50vw;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px 30px 50px; 
  border-radius: 10px;
  box-shadow: 0px 0px 30px #00000076;
`

const Title = styled.h1`
  color: var(--color__primary);
`

const TodoListWrapper = styled.ul`
  width: 100%;
`
export const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const removeTodoList = (id:string) => {
    const newTodoList:Todo[] = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <>
      <GlobalStyles />
      <TodoMain>
        <Title>
          TODO
        </Title>
        <Form todoList={todoList} setTodoList={setTodoList} />
        <TodoListWrapper>
          {todoList.map(list => (
            <List key={list.id} id={list.id} text={list.text} removeTodoList={removeTodoList} />
          ))}
        </TodoListWrapper>
      </TodoMain>
    </>
  );
}

export default App;
