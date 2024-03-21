import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  margin: 2rem;
`;

const TodoList = styled.section`
  background-color: #def6cc;
  border-radius: 1rem;
`;

export default function Todo() {
  return (
    <>
      <TodoList>
        {/* 할일 state */}
        <Title>Todo-list</Title>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Done</button>
          <p>안녕ㅎ반가워</p>
        </div>
        {/* addTodoList */}
        {/* 할일 입력 */}
      </TodoList>
    </>
  );
}
