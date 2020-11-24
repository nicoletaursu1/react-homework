export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          isDone: 0,
          text: action.task,
          date: Date.now(),
          id: Date.now() + Math.random() * 1000,
        },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "CHECK_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, isDone: +!task.isDone } : task
      );
    case "SAVE_EDIT":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );

    default:
      return state;
  }
};
