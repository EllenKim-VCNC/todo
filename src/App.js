import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const removeTodoList = (id) => {
    const newTodoList = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <main>
      <h1>
        TODO
      </h1>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <ul>
        {todoList.map((list, index) => (
          <List key={list.id} id={list.id} todo={list.todo} removeTodoList={removeTodoList} />
        ))}
      </ul>
    </main>
  );
}

export default App;
