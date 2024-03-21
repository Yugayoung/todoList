import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const InputForm = styled.form`
  background-color: transparent;

  padding-bottom: 2rem;
  width: 100%;
  display: flex;
`;
const Input = styled.input`
  flex: 1 0 auto;
  font-size: 1.3rem;
  border: none;
  border-top: 2px solid gray;
  border-radius: 0rem 0rem 0rem 1rem;
  padding: 1rem;
`;

const AddBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 1.5rem;
  padding: 2px 4px;
  border-top: 2px solid gray;
  width: 4rem;
  border-radius: 0rem 0rem 1rem 0rem;
  &:hover {
    color: red;
  }
`;
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  const handleChange = (e) => setText(e.target.value);
  return (
    <InputForm onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='할 일을 입력해주세요'
        value={text}
        onChange={handleChange}
      />
      <AddBtn>
        <FaPlusCircle />
      </AddBtn>
    </InputForm>
  );
}
