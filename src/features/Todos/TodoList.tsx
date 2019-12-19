import React, { useCallback, useEffect } from 'react';
import { Todo } from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTodos } from '../../state/selectors';
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
      shape="roundedLeft"
      direction="column"
      marginTop={5}
      width="300px"
      wrap={false}
      fit={true}
      overflow="scrollY"
      height="100%"
    >
      {todos.map(todo =>
        <Todo key={todo.id} id={todo.id} />
      )}
    </DefaultContainer>
  );
}

const ConnectedTodoList: React.FC = () => {
  const todos = useSelector(getFilteredTodos);
  const dispatch = useDispatch();
  const loadTodoList = useCallback(
    () => { dispatch(loadTodos()) },
    [dispatch]
  );
  return <TodoList todos={todos} loadTodos={loadTodoList} />
}

export default ConnectedTodoList;