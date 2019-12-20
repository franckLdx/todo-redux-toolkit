import React from 'react';
import { Spinner, Text, Box } from 'gestalt';
import { DefaultContainer } from './DefaultContainer';

interface LoadingProps {
  msg?: string;
  show?: boolean;
  accessibilityLabel?: string;
}

export const LabelledSpinner: React.FC<LoadingProps> = ({ show, msg, accessibilityLabel }) =>
  <DefaultContainer alignItems="center">
    <Text
      size="xl"
      bold={true}>
      {msg ?? "Please wait while loading"}
    </Text>
    <Box
      smMarginRight={12}
      mdMarginRight={1}
      width={10}
    />
    <Spinner
      show={show ?? true}
      accessibilityLabel={accessibilityLabel ?? "spinner wait while loading"}
    />
  </DefaultContainer>
