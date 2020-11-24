import React, { useContext, useMemo } from "react";

import { TodoContext } from "../contexts/TodoContext";
import Task from "./Task";
import { StyledList, StyledText } from "../styles/styled-components";

const TodoList = () => {
  const { tasks } = useContext(TodoContext);
  const sortedTasks = tasks.sort(({ isDone }, { isDone: secondIsDone }) =>
    isDone > secondIsDone ? 1 : isDone < secondIsDone ? -1 : 0
  );

  const memTasks = useMemo(
    () => sortedTasks.map((task) => <Task key={task.id} task={task} />),
    [sortedTasks]
  );

  return (
    <>
      {memTasks.length ? (
        <StyledList>{memTasks}</StyledList>
      ) : (
        <StyledText> No tasks. Enjoy your free time! </StyledText>
      )}
    </>
  );
};

export default TodoList;
