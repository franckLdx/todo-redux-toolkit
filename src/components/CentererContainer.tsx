import React from 'react';
import { BoxProps, Box } from "gestalt";

type CenteredContainerProps = Exclude<BoxProps, 'display' | 'direction' | 'width' | 'justifyContent'>

export const CenteredContainer: React.FC<CenteredContainerProps> = (props) =>
  <Box
    display="flex"
    direction="row"
    width={"100%"}
    justifyContent="center"
    {...props}
  />