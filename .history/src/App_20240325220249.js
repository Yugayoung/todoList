import './App.css';
import Header from './components/Header';
import { FilterProvider } from './context/FilterContext';
import TodoList from './pages/TodoList';

function App() {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
}

export default App;
