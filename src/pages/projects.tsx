import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import GridItem from '../components/GridItem'
import SEO from '../components/SEO'

interface ChildImageSharp {
  childImageSharp: {
    fluid: any
  }
}

interface PageProps {
  data: {
    projects: {
      edges: {
        node: {
          title: string
          slug: string
          cover: ChildImageSharp
        }
      }[]
    }
  }
}

const Area = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Projects: React.FunctionComponent<PageProps> = ({ data: { projects } }) => (
  <Layout color="#000">
    <SEO title="Projects | Jodie" />
    <Area>
      {projects.edges.map(({ node: project }) => (
        <GridItem key={project.slug} to={project.slug}>
          <Img fluid={project.cover.childImageSharp.fluid} />
          <span>{project.title}</span>
        </GridItem>
      ))}
    </Area>
  </Layout>
)

export default Projects

export const query = graphql`
  query ProjectsQuery {
    projects: allProjectsYaml {
      edges {
        node {
          title
          slug
          cover {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
