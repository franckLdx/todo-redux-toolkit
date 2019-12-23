import { Box, BoxProps } from 'gestalt';
import styled from 'styled-components';

export const DefaultContainer = styled(Box).attrs(props => {
  const { theme, ...boxProps } = props;
  return {
    display: 'flex',
    ...theme.container,
    ...boxProps
  } as BoxProps;
})``;

