import React, { useCallback } from 'react';
import { BoxProps, RadioButton } from 'gestalt';
import { LabeledButtonContainer, LabelOfButton } from './LabeledButton';

type OnChange = (id: string) => void;

type RadioButtonProps = {
  id: string;
  text: string;
  checked: boolean;
  onChange: OnChange;
} & Exclude<BoxProps, 'direction' | 'display'>;

const useChangeCallback = (id: string, onChange: OnChange) =>
  useCallback(
    () => onChange(id),
    [onChange, id]
  );

export const LabeledRadioButton: React.FC<RadioButtonProps> = React.memo(({ id, text, checked, onChange, ...labelContainerProps }) => {
  const changeCallback = useChangeCallback(id, onChange);
  return (
    <LabeledButtonContainer {...labelContainerProps}>
      <RadioButton
        id={'check'}
        checked={checked}
        value={text}
        onChange={changeCallback}
      />
      <LabelOfButton text={text} />
    </LabeledButtonContainer>
  );
});