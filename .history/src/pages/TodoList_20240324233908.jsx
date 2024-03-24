import React, { useState } from 'react';
import styled from 'styled-components';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  padding: 1rem 0rem 0rem 0rem;
`;

const TodoListCss = styled.section`
  background-color: #def6cc;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding: 0rem 2rem;
`;

const TapBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  &:hover {
    color: #fd6cfd;
  }
  &:active {
    background-color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-weight: bold;
  }
`;

const TodoUl = styled.ul`
  background-color: white;
  margin: 0rem;
  height: 400px;
  padding: 10px 1px;
  flex: 1 1 auto;
  overflow-y: auto;
`;

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const handleAdd = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted));
    console.log(delete);
  return (
    <>
      <TodoListCss>
        {/* 할일 state */}
        <Title>Todo-list</Title>
        <div>
          <TapBtn>All</TapBtn>
          <TapBtn>Active</TapBtn>
          <TapBtn>Done</TapBtn>
        </div>

        {/* TodoList */}
        <TodoUl>
          {todos.map((item) => (
            <Todo key={item.id} todo={item} onDelete={handleDelete} />
          ))}
        </TodoUl>

        {/* 할일 입력 */}
        <AddTodo onAdd={handleAdd} />
      </TodoListCss>
    </>
  );
}
