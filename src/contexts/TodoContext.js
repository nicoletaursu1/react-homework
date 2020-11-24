import React, { createContext } from "react";
import { useLocalStorage, getState } from "../utils/LocalStorage";

export const TodoContext = createContext({ tasks: [] });

const TodoContextProvider = (props) => {
  const [tasks, dispatch] = useLocalStorage(getState() || []);

  console.log(tasks);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
