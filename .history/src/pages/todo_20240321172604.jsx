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
    color: #fd6cfd;
  }
  &:active {
    background-color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-weight: bold;
  }
`;

const TodoLi = styled.li`
  list-style: none;
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  padding-top: 2px;
  &:hover {
    color: red;
  }
`;
const Label = styled.label`
  flex: 1 1;
  margin: 0rem 0.5rem;
`;
const TodoUl = styled.ul`
  background-color: white;
  margin: 0rem;
  height: 350px;
  padding: 10px 1px;
  flex: 1 1 auto;
  overflow-y: auto;
`;

export default function Todo() {
  return (
    <>
      <TodoList>
        {/* 할일 state */}
        <Title>Todo-list</Title>
        <div>
          <TapBtn>All</TapBtn>
          <TapBtn>Active</TapBtn>
          <TapBtn>Done</TapBtn>
        </div>

        {/* addTodoList */}
        <TodoUl>
          <TodoLi>
            <input type='checkbox' />
            <Label htmlFor=''>안녕</Label>
            <Btn>
              <FaRegTrashAlt />
            </Btn>
          </TodoLi>
        </TodoUl>

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
