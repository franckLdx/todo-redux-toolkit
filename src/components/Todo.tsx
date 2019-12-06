import React, { useState, useCallback } from 'react';
import { Checkbox, CheckboxProps, Transition } from 'semantic-ui-react'

interface TodoProps {
  label: string;
  done: boolean;
}
export const Todo: React.SFC<TodoProps> = (props) => {
  const [done, setDone] = useState(props.done);
  const change = useCallback(
    (_event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => setDone(data.checked ?? false),
    [setDone]
  );
  return <Checkbox
    label={props.label}
    onChange={change}
    checked={done}
  />
}