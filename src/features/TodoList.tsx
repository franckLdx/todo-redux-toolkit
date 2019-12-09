import React from 'react';
import { Todo } from './Todo';
import { Box } from 'gestalt';
import { useSelector } from 'react-redux';
import { todosSelect } from '../state/selectors';

export const TodoList: React.SFC = () => {
  const todos = useSelector(todosSelect);
  return (
    <Box
      direction="column"
      justifyContent="between"
      color="purple"
      marginTop={5}
      paddingX={5}
      paddingY={2}
    >
      {todos.map(todo =>
        <Todo key={todo.id} id={todo.id} />
      )}
    </Box>
  );
}