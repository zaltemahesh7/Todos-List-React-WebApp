// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("onDelete of " + todo);
    // Deleting this way in React does not works
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc) => {
    // console.log("I am adding this Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodos]);
    // console.log(myTodos);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // console.log(todos);
  return (
    <>
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }
          />
          <Route path='/about' element={<About />
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
  //http://192.168.43.246:3000 
}

export default App;
