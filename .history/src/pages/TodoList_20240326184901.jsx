import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

const TodoUl = styled.ul`
  background-color: white;
  margin: 0rem;
  height: 400px;
  padding: 10px 1px;
  flex: 1 1 auto;
  overflow-y: auto;
`;

function readTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());
  const handleAdd = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
    console.log('delete');
  };

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      {/* TodoList */}
      <TodoUl>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </TodoUl>

      {/* 할일 입력 */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }

  return todos.filter((todo) => todo.status === filter);
}
