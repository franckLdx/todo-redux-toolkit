import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDone } from './TodoModel';
import { todoSelect } from '../../state/selectors';
import { AppState } from '../../state/store';
import { LabeledCheckBox } from '../../components/LabeledCheckBox';

interface TodoProps {
  id: number;
}

export const Todo: React.SFC<TodoProps> = React.memo((props) => {
  const todo = useSelector((state: AppState) => todoSelect(state, props.id));
  const dispatch = useDispatch();
  const change = useCallback(
    (_id: string, checked: boolean) => dispatch(setDone({ id: props.id, done: checked })),
    [props.id, dispatch]
  );
  if (!todo) {
    return <React.Fragment />;
  }
  return (
    <LabeledCheckBox
      id={todo.id.toString()}
      checked={todo.done}
      text={todo.description}
      onChange={change}
      margin={2}
    />
  );
});
