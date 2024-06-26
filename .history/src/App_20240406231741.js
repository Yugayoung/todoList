import './App.css';
import TodoList from './pages/TodoList';
import Header from './components/Header';
import { styled } from 'styled-components';
import { useState } from 'react';

const filters = ['all', 'active', 'done'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  // setFilter 그대로 내려주지 말고 핸들 함수 만들어서 항상 내려주기!

  return (
    <TodoListSection>
      <Header filters={filters} filter={filter} onChange={setFilter} />
      <TodoList filter={filter} />
    </TodoListSection>
  );
}

export default App;

const TodoListSection = styled.section`
  background-color: #def6cc;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding: 0rem 2rem;
`;
