import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Box, Flex } from 'rebass'
import 'typeface-nunito-sans'
import theme from '../../config/theme'
import reset from '../styles/reset'
import Logo from '../components/Logo'

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Nunito Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: white;
    font-size: 18px;
  }
  a {
    transition: all 0.3s ease-in-out;
    color: black;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  
  ${reset}
`

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) => {
  return isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }
}

const PartialNavLink = (props: any) => (
  <Link getProps={isPartiallyActive} {...props}>
    {props.children}
  </Link>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;
  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
  }
`

const SideBarInner = styled(Box)`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    position: relative;
  }
`

const Nav = styled(Flex)`
  a {
    text-decoration: none;
    font-weight: 700;
    color: black;
    font-size: ${props => props.theme.fontSizes[2]};
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const Main = styled.main`
  @media (min-width: calc(${props => props.theme.breakpoints[1]} + 1px)) {
    grid-column-start: 2;
  }
`

interface QueryResult {
  navigation: {
    edges: {
      node: {
        name: string
        link: string
      }
    }[]
  }
}

const Layout: React.FunctionComponent = ({ children }) => {
  const data: QueryResult = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <SideBarInner as="aside" p={8}>
            <Box>
              <Link to="/" aria-label="LekoArts, Back to Home">
                <Logo />
              </Link>
              <Nav mt={10} as="nav" flexWrap="nowrap" flexDirection="column" alignItems="flex-start">
                {data.navigation.edges.map(({ node: item }) => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
              </Nav>
            </Box>
            <Box>
              <Box fontSize={0} color="grey">
                Starter by <a href="https://www.lekoarts.de/en">LekoArts</a>.<br />
                <a href="https://github.com/LekoArts/gatsby-starter-portfolio-jodie">Source</a>.
              </Box>
            </Box>
          </SideBarInner>
          <Main>{children}</Main>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout

const query = graphql`
  query LayoutQuery {
    navigation: allNavigationYaml {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`
