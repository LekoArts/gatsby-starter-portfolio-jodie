import styled from 'styled-components'
import { animated } from 'react-spring'

import {
  space,
  color,
  width,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  textAlign,
} from 'styled-system'

export const Box = styled<any>('div')`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
`

Box.displayName = 'Box'

export const AnimatedBox = styled<any>(animated.div)`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
`

AnimatedBox.displayName = 'AnimatedBox'

export const Flex = styled<any>('div')`
  display: flex;
  ${space}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

Flex.displayName = 'Flex'

export const AnimatedFlex = styled<any>(animated.div)`
  display: flex;
  ${space}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

AnimatedFlex.displayName = 'AnimatedFlex'

export const Button = styled<any>('button')`
  border-radius: 1000rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;
  ${space}
  ${width}
  ${color}
`

Button.displayName = 'Button'
