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
      paddingX={5}
      paddingY={2}
      marginTop={5}
    >
      {todos.map(todo =>
        <Todo key={todo.id} label={todo.description} done={todo.done} />
      )}
    </Box>
  );
}