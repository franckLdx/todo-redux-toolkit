import React from 'react';
import { Todo } from './Todo';
import { useSelector } from 'react-redux';
import { todosSelect } from '../../state/selectors';
import { AppContainer } from '../../components/AppContainer';

export const TodoList: React.SFC = () => {
  const todos = useSelector(todosSelect);
  return (
    <AppContainer
      direction="column"
      marginTop={5}
    >
      {todos.map(todo =>
        <Todo key={todo.id} id={todo.id} />
      )}
    </AppContainer>
  );
}