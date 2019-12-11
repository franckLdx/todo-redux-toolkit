import React from 'react';
import { Todo } from './Todo';
import { useSelector } from 'react-redux';
import { todosSelect } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';

export const TodoList: React.SFC = () => {
  const todos = useSelector(todosSelect);
  return (
    <DefaultContainer
      direction="column"
      marginTop={5}
    >
      {todos.map(todo =>
        <Todo key={todo.id} id={todo.id} />
      )}
    </DefaultContainer>
  );
}