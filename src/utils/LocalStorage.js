import { useEffect, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

export const getState = () => {
  return JSON.parse(localStorage.getItem("app")) || [];
};
export const useLocalStorage = (initialTasks) => {
  const [localState, dispatch] = useReducer(TodoReducer, initialTasks);

  useEffect(() => {
    localStorage.setItem("app", JSON.stringify(localState));
  }, [localState]);

  return [localState, dispatch];
};

export const sortList = (state = []) =>
  state.sort(({ isDone }, { isDone: seconIsDone }) => {
    if (isDone > seconIsDone) return 1;
    else if (isDone < seconIsDone) return -1;
    else return 0;
  });
