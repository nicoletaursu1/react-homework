import React, { Component } from "react";
import { TodoContext } from "../contexts/TodoContext";
import {
  StyledForm,
  StyledInput,
  StyledAddButton,
} from "../styles/styled-components";

class TaskForm extends Component {
  static contextType = TodoContext;

  constructor() {
    super()
    this.state = {
      text: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.dispatch({ type: "ADD_TASK", task: this.state.text });
    this.setState({ text: "" });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Please add a task"
          value={this.state.text}
          onChange={this.handleChange}
          required
        />
        <StyledAddButton>Add</StyledAddButton>
      </StyledForm>
    );
  }
}

export default TaskForm;
