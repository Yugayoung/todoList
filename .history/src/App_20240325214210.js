import './App.css';
import { FilterProvider } from './context/FilterContext';
import TodoList from './pages/TodoList';

function App() {
  return (
    <FilterProvider>
      <TodoList />
    </FilterProvider>
  );
}

export default App;
