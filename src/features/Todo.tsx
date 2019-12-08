import React, { useState, useCallback, SyntheticEvent } from 'react';
import { Box, Checkbox, Label, Text } from 'gestalt';

interface TodoProps {
  label: string;
  done: boolean;
}

export const Todo: React.SFC<TodoProps> = (props) => {
  const [done, setDone] = useState(props.done);
  const change = useCallback(
    ({ checked }: Event) => setDone(checked),
    [setDone]
  );
  return (
    <Box
      alignItems="center"
      direction="row"
      display="flex"
      paddingY={2}
      shape="rounded"
    >
      <Checkbox
        checked={done}
        id={'check'}
        onChange={change}
      />
      <Label htmlFor={'check'}>
        <Box paddingX={2}>
          <Text>{props.label}</Text>
        </Box>
      </Label>
    </Box>
  );
}

type Event = {
  event: SyntheticEvent<HTMLInputElement>,
  checked: boolean;
}