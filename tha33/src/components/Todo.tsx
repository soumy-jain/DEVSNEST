import React, { useState, useContext } from "react";
import Context from "../Context";
import { ThemeContextType } from "../Context";
import { TodoType } from "./Todos";

interface TodoListProps {
  title: string;
  done: boolean;
  index: number;
  todos: TodoType[];
  setTodos: any;
}

const Todo = ({ title, done, index, todos, setTodos }: TodoListProps) => {
  const { theme, setTheme } = useContext<ThemeContextType>(Context);

  return (
    <div className="todo-big-box">
      <div className={theme ? "todo-box dark" : "todo-box"}>
        <div className="title">{title}</div>
      </div>
      <div className="del">
        <button onClick={() => setTodos(todos.filter((el, i) => index !== i))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
