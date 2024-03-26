import React from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
  background-color: #def6cc;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  padding: 1rem 0rem 0rem 0rem;
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

export default function Header() {
  return (
    <Header>
      <Title>Todo-list</Title>
      <div>
        <TapBtn>All</TapBtn>
        <TapBtn>Active</TapBtn>
        <TapBtn>Done</TapBtn>
      </div>
    </Header>
  );
}
