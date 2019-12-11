import 'styled-components'
import { BoxProps } from 'gestalt';

declare module 'styled-components' {
  export interface DefaultTheme {
    container: Pick<BoxProps, 'color' | 'justifyContent' | 'wrap' | 'paddingX' | 'paddingY'>
    label: Pick<BoxProps, 'paddingX' | 'paddingY' | 'color' | 'shape'>
  }
}