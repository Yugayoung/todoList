import './App.css';
import Header from './components/Header';
import { FilterProvider } from './context/FilterContext';
import TodoList from './pages/TodoList';

function App() {
  return (
    <FilterProvider>
      <Header />
      <TodoList />
    </FilterProvider>
  );
}

export default App;
