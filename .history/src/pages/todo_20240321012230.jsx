import React from 'react';
import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  padding: 1rem;
`;

const TodoList = styled.section`
  background-color: #def6cc;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
`;
const AddTodoLi = styled.li`
  list-style: none;
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
        <div>
          <ul>
            <AddTodoLi>
              <input type='checkbox' />
              dksdsud
            </AddTodoLi>
            <li>안녕</li>
            <li>안녕</li>
            <li>안녕</li>
            <li>안녕</li>
          </ul>
        </div>
        {/* 할일 입력 */}
        <div>
          <input type='text' placeholder='할 일을 입력해주세요' />
          <button>
            <FaPlusCircle />
          </button>
        </div>
      </TodoList>
    </>
  );
}
