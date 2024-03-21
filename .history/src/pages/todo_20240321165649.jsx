import React from 'react';
import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  padding: 1rem 0rem 0rem 0rem;
`;

const TodoList = styled.section`
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
    color: #f3b9f8;
  }
  &:active {
    background-color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-weight: bold;
  }
`;

const AddTodoLi = styled.li`
  list-style: none;
`;
const AddTodoUl = styled.ul`
  background-color: white;
  margin: 0rem;
  height: 400px;
  padding: 10px 1px;
`;

export default function Todo() {
  return (
    <>
      <TodoList>
        {/* 할일 state */}
        <Title>Todo-list</Title>
        <div>
          <TapBtn checked>All</TapBtn>
          <TapBtn>Active</TapBtn>
          <TapBtn>Done</TapBtn>
        </div>

        {/* addTodoList */}
        <AddTodoUl>
          <AddTodoLi>
            <input type='checkbox' />
            <label htmlFor=''>안녕</label>
            <button>
              <FaRegTrashAlt />
            </button>
          </AddTodoLi>
        </AddTodoUl>

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
