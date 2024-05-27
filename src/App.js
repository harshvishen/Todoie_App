import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";


import './style.css';

const App = () => {
return (
  <div className="todo-container">
     <Header title = "Todoie App"/>
     <TodoItem text= "Eat"/>
     <TodoItem text= "Sleep"/>
     <TodoItem text= "Code"/>
     <TodoItem text= "Repeat"/>
     <Button />
  </div>
);
};

export default App;