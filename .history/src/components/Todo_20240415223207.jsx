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
  /* 비우지 않고 none 으로 하는게 더 좋은가? */
  text-decoration: ${(props) =>
    props.$status === 'done' ? 'line-through' : 'none'};
  text-decoration-color: red;
  text-decoration-thickness: 3px;
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
  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'done' : 'active';
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <TodoLi>
      <input
        type='checkbox'
        id={id}
        checked={status === 'done'}
        onChange={handleChange}
      />
      <Label htmlFor={id} $status={status}>
        {text}
      </Label>
      <Btn onClick={handleDelete}>
        <FaRegTrashAlt />
      </Btn>
    </TodoLi>
  );
}
