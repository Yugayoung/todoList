import { styled } from 'styled-components';

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
  &.active {
    background-color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-weight: bold;
  }
`;

const FilterUl = styled.ul`
  display: flex;
  margin: 0rem;
  padding: 0rem;
`;
const FilterLi = styled.li`
  list-style: none;
`;

export default function Header({ filters, filter, onChange }) {
  return (
    <header>
      <Title>Todo-list</Title>
      {/* 할일 state */}
      <FilterUl>
        {filters.map((value, index) => (
          <FilterLi key={index}>
            <TapBtn
              onClick={() => onChange(value)}
              className={filter === value ? 'active' : ''}
            >
              {value}
            </TapBtn>
          </FilterLi>
        ))}
      </FilterUl>
    </header>
  );
}
