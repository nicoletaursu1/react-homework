import styled, { css } from "styled-components";

const StyledHeader = styled.div`
  font: 24px/24px Arial, sans-serif;
  color: #8b8b8b;
  text-align: center;
  &::first-letter {
    color: indianred;
  }
`;
const StyledList = styled.ul`
  padding: 20px 0;
  margin: auto;
  display: block;
  width: 500px;
  box-sizing: border-box;
`;
const StyledText = styled.p`
  text-align: center;
  font: 14px/16px Arial, sans-serif;
  color: gray;
`;
const StyledForm = styled.form`
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  & > *::first-child {
    margin-right: 20px;
  }
`;
const StyledInput = styled.input`
  width: 350px;
  appearance: none;
  border: 1px solid #cfcfcf;
  box-shadow: none;
  border-radius: 0;
  font: 14px/16px Arial, sans-serif;
  padding: 8px 12px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
`;
const StyledAddButton = styled.button`
  width: auto;
  cursor: pointer;
  margin-left: 8px;
  appearance: none;
  border: 1px solid #cfcfcf;
  box-shadow: none;
  border-radius: 0;
  font: 14px/16px Arial, sans-serif;
  padding: 8px 12px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  &:hover {
    background-color: #e1d8de;
  }
`;
const TodoListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #cfcfcf;
  border-radius: 2px;
  box-sizing: border-box;
  ${(props) =>
    props.isDone === 1 &&
    css`
      margin-top: 40px;
      &::before {
        content: "COMPLETE";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        padding: 0;
        font: 14px Arial, sans-serif;
        font-weight: 500;
        color: #8b8b8b;
        text-align: center;
        transform: translateY(-150%);
      }
      & ~ *:not(:first-child) {
        margin-top: inherit;
        &::before {
          content: none;
        }
      }
    `}
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledButton = styled.i`
  font-size: 18px;
  cursor: pointer;
  color: indianred;
`;
const StyledCheckmark = styled.i`
  font-size: 18px;
  cursor: pointer;
  ${(props) =>
    props.isDone === 0 &&
    `
        color: gray;
    `}

  ${(props) =>
    props.isDone === 1 &&
    `
        color: green;
    `}
`;
const StyledTaskText = styled.span`
  flex: 1;
  font: 14px/16px Arial, sans-serif;
  color: #1f1213;
`;
const StyledDate = styled.span`
  font: 14px/16px Arial, sans-serif;
  font-size: 11px;
  color: #a5a5a5;
`;
const StyledEditForm = styled.form`
  flex: 1;
  padding: 0;
  margin: 0;
`;
const StyledEditInput = styled.input`
  outline: none;
  width: 100%;
  appearance: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font: 14px/16px Arial, sans-serif;
  padding: 0;
  border-bottom: 1px solid #cfcfcf;
`;
export {
  StyledList,
  StyledText,
  StyledForm,
  StyledInput,
  StyledAddButton,
  StyledButton,
  TodoListItem,
  StyledCheckmark,
  StyledTaskText,
  StyledDate,
  StyledHeader,
  StyledEditForm,
  StyledEditInput,
};
