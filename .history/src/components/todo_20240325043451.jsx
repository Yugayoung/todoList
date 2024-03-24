import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

const TodoLi = styled.li`
  list-style: none;
  padding: 0rem 1rem 0.6rem 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  border-bottom: 1px solid gray;
`;
const Label = styled.label`
  flex: 1 1;
  margin: 0rem 0.5rem;
  text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
  text-decoration-color: red;
  text-decoration-thickness: 5px;
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

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <TodoLi>
      <input
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <Label htmlFor='checkbox' completed={status === 'completed'}>
        {text}
      </Label>
      <Btn onClick={handleDelete}>
        <FaRegTrashAlt />
      </Btn>
    </TodoLi>
  );
}
