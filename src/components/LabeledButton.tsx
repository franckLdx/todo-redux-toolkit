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

interface LabelOfButtonProps { text: string };
export const LabelOfButton: React.FC<LabelOfButtonProps> = ({ text }) =>
  <Label htmlFor={'check'}>
    <Box paddingX={2}>
      <Text>{text}</Text>
    </Box>
  </Label>
