import './App.css';
import TodoList from './pages/TodoList';
import Header from './components/Header';
import { styled } from 'styled-components';
import { useState } from 'react';

const TodoListSection = styled.section`
  background-color: #def6cc;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding: 0rem 2rem;
`;

const filters = ['all', 'active', 'done'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <TodoListSection>
      <Header filters={filters} filter={filter} onChange={setFilter} />
      <TodoList filter={filter} />
    </TodoListSection>
  );
}

export default App;
