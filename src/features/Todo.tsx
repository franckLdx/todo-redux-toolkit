import React, { useCallback, SyntheticEvent } from 'react';
import { Box, Checkbox, Label, Text } from 'gestalt';
import { useDispatch, useSelector } from 'react-redux';
import { setDone } from './TodoModel';
import { todoSelect } from '../state/selectors';
import { AppState } from '../state/store';

interface TodoProps {
  id: number;
}

export const Todo: React.SFC<TodoProps> = React.memo((props) => {
  const todo = useSelector((state: AppState) => todoSelect(state, props.id));
  const dispatch = useDispatch();
  const change = useCallback(
    ({ checked }: Event) => dispatch(setDone({ id: props.id, done: checked })),
    [props.id, dispatch]
  );
  if (!todo) {
    return <React.Fragment />;
  }
  return (
    <Box
      direction="row"
      display="flex"
      marginBottom={3}
      paddingX={2}
      paddingY={2}
      shape="rounded"
      color="lightGray"
    >
      <Checkbox
        id={'check'}
        checked={todo.done}
        onChange={change}
      />
      <Label htmlFor={'check'}>
        <Box paddingX={2}>
          <Text>{todo.description}</Text>
        </Box>
      </Label>
    </Box>
  );
});

type Event = {
  event: SyntheticEvent<HTMLInputElement>,
  checked: boolean;
}