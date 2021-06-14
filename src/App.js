import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import { useState } from 'react';
import TodoList from './components/TodoList';
import { MdAddCircle } from "react-icons/md";
import TodoInsert from './components/TodoInsert';



let nextId = 4;
function App() {

  const [todos,settodos] = useState([
    {
      id:1,
      text: '할일1',
      checked: true
    },
    {
      id:2,
      text: '할일2',
      checked: true
    },
    {
      id:3,
      text: '할일3',
      checked: false
    }
  ])
  

return (
  <>
    <Template todosLength={todos.length}>
      <TodoList todos={todos}></TodoList>
    </Template>
  </>
)
}

export default App;
