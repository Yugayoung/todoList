import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;

export default function Todo() {
  return (
    <>
      <section>
        {/* 할일 state */}
        <h2>Todo-list</h2>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Done</button>
          <p>안녕ㅎ반가워</p>
        </div>
        {/* addTodoList */}
        {/* 할일 입력 */}
      </section>
    </>
  );
}
