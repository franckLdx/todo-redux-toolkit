import React, { useCallback, SyntheticEvent, useContext } from 'react';
import { Box, Checkbox, Label, Text, BoxProps } from 'gestalt';
import styled from 'styled-components';

type LabelContainerProps = Pick<BoxProps, 'color' | 'shape' | 'margin'>

type Event = {
  event: SyntheticEvent<HTMLInputElement>,
  checked: boolean;
}

type CheckBoxProps = {
  id: string;
  text: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
} & LabelContainerProps;

const LabelContainer = styled(Box).attrs(props => {
  const { theme, ...boxProps } = props;
  return {
    ...theme.label,
    direction: "row",
    display: "flex",
    ...boxProps
  } as BoxProps;
})``;

export const LabeledCheckBox: React.FC<CheckBoxProps> = ({ id, text, checked, onChange, ...labelContainerProps }) => {
  const change = useCallback(
    ({ checked }: Event) => onChange(id, checked),
    [onChange, id]
  );
  return (
    <LabelContainer {...labelContainerProps}>
      <Checkbox
        id={'check'}
        checked={checked}
        onChange={change}
      />
      <Label htmlFor={'check'}>
        <Box paddingX={2}>
          <Text>{text}</Text>
        </Box>
      </Label>
    </LabelContainer>
  );
}