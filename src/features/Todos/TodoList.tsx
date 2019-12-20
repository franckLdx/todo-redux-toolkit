import React, { useEffect } from 'react';
import { Todo } from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTodos, getLoadStatus } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';
import { Todos, loadTodos } from './TodoState';
import styled from 'styled-components';
import { LabelledSpinner } from '../../components/LabelledSpinner';
import { Message } from '../../components/Message';

interface TodoListProps {
  todos: Todos;
}
export const TodoList: React.FC<TodoListProps> = ({ todos }) =>
  <TodoContainer>
    {todos.map(todo =>
      <Todo key={todo.id} id={todo.id} />
    )}
  </TodoContainer>
  ;

const ConnectedTodoList: React.FC = () => {
  const loadStatus = useSelector(getLoadStatus);
  const todos = useSelector(getFilteredTodos);
  const dispatch = useDispatch();

  useEffect(
    () => { dispatch(loadTodos()) },
    [dispatch]
  );

  switch (loadStatus) {
    case 'LOADING':
      return <LabelledSpinner />
    case 'LOADED':
      return <TodoList todos={todos} />
    case 'ERROR':
      return <Message msg="Sorry, failed to load todos. Bette luck next time." />
    default:
      return <React.Fragment />
  }
}

export default ConnectedTodoList;

const TodoContainer = styled(DefaultContainer).attrs(() => ({
  direction: "column",
  shape: "roundedLeft",
  width: "300px",
  wrap: false,
  fit: true,
  overflow: "scrollY",
  height: "100%",
}))``;
