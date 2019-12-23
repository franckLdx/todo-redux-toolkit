import React from 'react';
import { DefaultContainer } from './Containers/DefaultContainer';
import { Text } from 'gestalt';

interface MessageProps {
  msg: string
}

export const Message: React.FC<MessageProps> = ({ msg }) =>
  <DefaultContainer alignItems="center">
    <Text
      size="xl"
      bold={true}>
      {msg ?? "Please wait while loading"}
    </Text>
  </DefaultContainer>