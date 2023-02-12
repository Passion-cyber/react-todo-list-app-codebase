import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImRadioChecked } from "react-icons/im";
import { HiBadgeCheck } from "react-icons/hi";
import Widget from "./widget";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [renderTodo, setRenderTodo] = useState([]);

  const [activeWidget, setActiveWidget] = useState("all");

  const addTodo = (todo) => {
    const newTodos = [{ todo: todo, completed: false }, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (todoName) => {
    const removedTodo = [...todos].filter((todos) => todos.todo !== todoName);
    setTodos(removedTodo);
    console.log(removedTodo);
  };

  const completeTodo = (todoName) => {
    const newTodos = [...todos].map((todo) => {
      const itodo = todo.todo === todoName;
      if (itodo) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    return setTodos(newTodos);
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (activeWidget.toLocaleLowerCase() === "all") {
        return setRenderTodo(todos);
      } else if (activeWidget.toLocaleLowerCase() === "active") {
        return setRenderTodo(todos.filter((todo) => todo.completed === false));
      } else {
        return setRenderTodo(todos.filter((todo) => todo.completed === true));
      }
    }
    return () => {
      mounted = false;
    };
  }, [activeWidget]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setRenderTodo(todos);
    }
    return () => {
      mounted = false;
    };
  }, [todos]);

  return (
    <>
      <div>
        <h1>What are you looking to do today?</h1>
        <TodoForm addTodo={addTodo} />
        <div className="list-wrap">
          {renderTodo.length < 1 ? (
            <div className="text-center"> make a todo</div>
          ) : (
            <>
              {renderTodo.map((todo, index) => (
                <div
                  className={`individual-todos ${
                    todo.completed && "completed"
                  }`}
                  key={index}
                >
                  <div
                    className={`radio-btn ${ todo.completed && 'active'}`}
                    onClick={() => completeTodo(todo.todo)}
                  >
                    {todo.completed ?  <HiBadgeCheck/> : <ImRadioChecked/>}
                  </div>
                  {todo.todo}
                  <div
                    className="close-btn"
                    onClick={() => removeTodo(todo.todo)}
                  >
                    <AiOutlineCloseCircle />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Widget activeWidget={activeWidget} setActiveWidget={setActiveWidget} />
    </>
  );
};

export default TodoList;
