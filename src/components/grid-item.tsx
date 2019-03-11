import styled from 'styled-components'
import { Link } from 'gatsby'

const GridItem = styled(Link)`
  position: relative;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  > span {
    z-index: 10;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    text-align: right;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes[4]};
    padding: ${props => props.theme.space[6]};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      font-size: ${props => props.theme.fontSizes[3]};
      padding: ${props => props.theme.space[5]};
    }
  }
  &:hover {
    > div img {
      transform: scale(1.1);
    }
  }
`

export default GridItem
