import React, { useEffect, useState } from "react";
import Form from "../Form";
import TodoTitle from "../TodoTitle";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux";

function TodoApp() {
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodo, setActiveTodo] = useState([]);
  const [inactiveTodo, setInactiveTodo] = useState([]);

  useEffect(() => {
    let active = todos.filter((el) => {
      return el.status == true;
    });

    setActiveTodo(active);

    let inactive = todos.filter((el) => {
      return el.status == false;
    });

    setInactiveTodo(inactive);
  }, [todos]);

  return (
    <>
      <div className="mx-auto w-[432px] mt-10">
        <Form></Form>

        <TodoTitle title="Tasks to do" count="2" status={true}></TodoTitle>
        {todos.length > 0 &&
          activeTodo.map((todo, index) => {
            return (
              <TodoItem id={todo.id} key={index} title={todo.name} status={true}></TodoItem>
            );
          })}

        <TodoTitle title="Done" count="2" status={true}></TodoTitle>
        {
         todos.length > 0 &&
          inactiveTodo.map((todo, index) => {
            return (
              <TodoItem id={todo.id} key={index} title={todo.name} status={false}></TodoItem>
            );
          }) 
        }
      </div>
    </>
  );
}

export default TodoApp;
