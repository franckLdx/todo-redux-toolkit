import React, { useEffect } from 'react';
import { Todo } from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTodos, getLoadStatus } from '../../app/selectors';
import { DefaultContainer } from '../../common/Containers/DefaultContainer';
import { Todos, loadTodos } from './TodoSlice';
import styled from 'styled-components';
import { LabelledSpinner } from '../../common/LabelledSpinner';
import { Message } from '../../common/Message';

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
