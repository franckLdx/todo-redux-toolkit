import { Box, BoxProps } from 'gestalt';
import styled from 'styled-components';

export const AppContainer = styled(Box).attrs(props => {
  const { theme, ...boxProps } = props;
  return {
    display: 'flex',
    justifyContent: 'between',
    color: theme.container.color,
    paddingX: 2,
    paddingY: 2,
    ...boxProps
  } as BoxProps;
})``;

