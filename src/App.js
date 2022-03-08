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

  // server 3001
  const URL = 'http://localhost:3001/todos'
  const createHandler = () => {
    return fetch(URL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        "title": "99",
        "description": "description"
    }), // body data type must match "Content-Type" header
  }).then(json => json.json()).then(res => {
    console.log(res);
    setTodoList([...todoList, {id: res.id, todo: res.title}])
  })
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
      <button onClick={createHandler}>create</button>
    </main>
  );
}

export default App;
