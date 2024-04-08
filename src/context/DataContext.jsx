import { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({ data: [], theme: [] });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
