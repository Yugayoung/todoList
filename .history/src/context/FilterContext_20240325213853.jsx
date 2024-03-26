import { createContext } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
}
