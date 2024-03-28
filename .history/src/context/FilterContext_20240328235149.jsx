// 다시 한번해보기 🐶
import { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const filters = ['all', 'active', 'done'];
  const [filter, setFilter] = useState(filters[0]);
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
}
