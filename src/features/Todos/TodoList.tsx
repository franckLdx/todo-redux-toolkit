import React, { useCallback, useEffect } from 'react';
import { Todo } from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelect } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';
import { Todos, loadTodos } from './TodoState';

interface TodoListProps {
  todos: Todos;
  loadTodos: () => void;
}
export const TodoList: React.FC<TodoListProps> = ({ todos, loadTodos }) => {
  useEffect(() => loadTodos(), [loadTodos]);
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

const ConnectedTodoList: React.FC = () => {
  const todos = useSelector(todosSelect);
  const dispatch = useDispatch();
  const loadTodoList = useCallback(
    () => { dispatch(loadTodos()) },
    [dispatch]
  );
  return <TodoList todos={todos} loadTodos={loadTodoList} />
}

export default ConnectedTodoList;