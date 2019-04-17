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
  SpaceProps,
  WidthProps,
  ColorProps,
  FlexProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  AlignSelfProps,
  TextAlignProps,
} from 'styled-system'

type BoxProps = SpaceProps & WidthProps & ColorProps & FlexProps & AlignSelfProps & TextAlignProps

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
`

Box.displayName = 'Box'

type AnimatedBoxProps = SpaceProps & WidthProps & ColorProps & FlexProps & AlignSelfProps & TextAlignProps

export const AnimatedBox = styled(animated.div)<AnimatedBoxProps>`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
`

AnimatedBox.displayName = 'AnimatedBox'

type FlexCompProps = SpaceProps & FlexWrapProps & FlexDirectionProps & AlignItemsProps & JustifyContentProps

export const Flex = styled.div<FlexCompProps>`
  display: flex;
  ${space}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

Flex.displayName = 'Flex'

type AnimatedFlexCompProps = SpaceProps & FlexWrapProps & FlexDirectionProps & AlignItemsProps & JustifyContentProps

export const AnimatedFlex = styled(animated.div)<AnimatedFlexCompProps>`
  display: flex;
  ${space}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

AnimatedFlex.displayName = 'AnimatedFlex'

type ButtonProps = SpaceProps & WidthProps & ColorProps

export const Button = styled.button<ButtonProps>`
  border-radius: 1000rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;
  ${space}
  ${width}
  ${color}
`

Button.displayName = 'Button'
