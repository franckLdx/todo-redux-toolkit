import React, { useCallback } from 'react';
import { BoxProps, Checkbox } from 'gestalt';
import { LabeledButtonContainer, LabelOfButton, OnChangeEvent } from './LabeledButton';

type OnChange = (id: string, checked: boolean) => void;

type CheckedButtonProps = {
  id: string;
  text: string;
  checked: boolean;
  onChange: OnChange;
} & Exclude<BoxProps, 'direction' | 'display'>;

export const LabeledCheckedButton: React.FC<CheckedButtonProps> = ({ id, text, checked, onChange, ...labelContainerProps }) => {
  const changeCallback = useCallback(
    (event: OnChangeEvent) => onChange(id, event.checked),
    [onChange, id]
  );
  return (
    <LabeledButtonContainer {...labelContainerProps}>
      <Checkbox
        id={id}
        checked={checked}
        onChange={changeCallback}
      />
      <LabelOfButton id={id} text={text} />
    </LabeledButtonContainer>
  );
}