import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { TodoContext } from "../contexts/TodoContext";
import {
  TodoListItem,
  StyledCheckmark,
  StyledTaskText,
  StyledDate,
  StyledButton,
} from "../styles/styled-components";
import {
  StyledEditForm,
  StyledEditInput,
} from "../styles/styled-components.js";

const localeDateOptions = [
  "en",
  {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
];

const Task = ({ task }) => {
  const { dispatch } = useContext(TodoContext);
  let [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(task.text);
  const inputRef = useRef(null);

  useEffect(() => {
    isEdit && inputRef.current.focus();
  }, [isEdit]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.value) {
        setValue(value);
        dispatch({ type: "SAVE_EDIT", payload: { id: task.id, text: value } });
        setIsEdit(false);
      } else {
        setIsEdit(true);
      }
    },
    [value, setValue, task.id, dispatch, setIsEdit]
  );

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const memoForm = useMemo(() => {
    return isEdit ? (
      <StyledEditForm onSubmit={onSubmit} id={task.id}>
        <StyledEditInput
          type="text"
          value={value}
          ref={inputRef}
          onChange={onChange}
          onBlur={onSubmit}
        />
      </StyledEditForm>
    ) : (
      <StyledTaskText onClick={() => setIsEdit(true)}>{value}</StyledTaskText>
    );
  }, [value, isEdit, onSubmit, task.id, inputRef]);

  return (
    <TodoListItem isDone={task.isDone}>
      <StyledCheckmark
        isDone={task.isDone}
        onClick={() => dispatch({ type: "CHECK_TASK", id: task.id })}
        className="fas fa-check"
      ></StyledCheckmark>

      {memoForm}

      <StyledDate>
        {new Date(task.date).toLocaleDateString(...localeDateOptions)}
      </StyledDate>

      <StyledButton
        onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}
        className="far fa-trash-alt"
      ></StyledButton>
    </TodoListItem>
  );
};

export default Task;
