import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { Todo } from './interface';


export const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const removeTodoList = (id:string) => {
    const newTodoList:Todo[] = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <main>
      <h1>
        TODO
      </h1>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ul>
        {todoList.map(list => (
          <List key={list.id} id={list.id} text={list.text} removeTodoList={removeTodoList} />
        ))}
      </ul>
    </main>
  );
}

export default App;
