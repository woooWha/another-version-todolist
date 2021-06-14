import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import { useState } from 'react';
import TodoList from './components/TodoList';
import { MdAddCircle } from "react-icons/md";
import TodoInsert from './components/TodoInsert';



let nextId = 4;
function App() {
  const [selectedTodo, setSelectedTodo] =useState(null);
  const[onInsertTodo, setonInsertTodo] = useState(false);
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
  

  const OnInsertTodo = () => {
    if(selectedTodo){
      setSelectedTodo(null);
    }
    setonInsertTodo(!onInsertTodo);
  }

const onChangeSelectedTodo = todo => {
  setSelectedTodo(todo);
}


  const OnCheckToggle = id => {
    settodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  
  const onInsertAddTodo = text => {
    if (text=== "") {
    return alert('할 일을 입력해주세요.');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      settodos(todos=> todos.concat(todo));
      nextId++;
    }
  };

  const onRemove = id => {
    OnInsertTodo();
    settodos(todos => todos.filter(todo => todo.id !== id));
  }

  const onUpdate = (id, text) => {
    OnInsertTodo();
    settodos(todos =>
      todos.map(todo => (todo.id === id ? {...todo, text}: todo))
    );
  };

  

  return (
    <>
      <Template todosLength={todos.length}>
        <TodoList onChangeSelectedTodo ={onChangeSelectedTodo} todos={todos} OnCheckToggle={OnCheckToggle} OnInsertTodo={OnInsertTodo}></TodoList>
        <div className="add-todo-button" onClick={OnInsertTodo}>
          <MdAddCircle />
        </div>
        {onInsertTodo && <TodoInsert onRemove={onRemove} onUpdate={onUpdate} selectedTodo = {selectedTodo} OnInsertTodo={OnInsertTodo} onInsertAddTodo={onInsertAddTodo} />}
      </Template>
    </>
  )
}

export default App;
