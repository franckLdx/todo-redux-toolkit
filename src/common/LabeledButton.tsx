import React, { SyntheticEvent } from 'react';
import { Box, Label, Text, BoxProps } from 'gestalt';
import styled from 'styled-components';

export type OnChangeEvent = {
  event: SyntheticEvent<HTMLInputElement>,
  checked: boolean;
}

export const LabeledButtonContainer = styled(Box).attrs(props => {
  const { theme, ...boxProps } = props;
  return {
    ...theme.label,
    direction: "row",
    display: "flex",
    ...boxProps
  } as BoxProps;
})``;

interface LabelOfButtonProps { id: string, text: string };

export const LabelOfButton: React.FC<LabelOfButtonProps> = React.memo(({ id, text }) =>
  <Label htmlFor={id}>
    <Box flex="grow" paddingX={2}>
      <Text>{text}</Text>
    </Box>
  </Label>
);