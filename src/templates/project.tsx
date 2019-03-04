import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Box, Button } from '../elements'
import SEO from '../components/SEO'

interface ChildImageSharp {
  childImageSharp: {
    fluid: any
  }
}

interface PageProps {
  data: {
    project: {
      title_detail: string
      color: string
      category: string
      desc: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      edges: {
        node: ChildImageSharp
      }[]
    }
  }
}

const PBox = styled(Box)`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`

const Category = styled(Box)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled.div`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

const Project: React.FunctionComponent<PageProps> = ({ data: { project, images } }) => (
  <Layout color={project.color}>
    <SEO
      title={`${project.title_detail} | Jodie`}
      desc={project.desc}
      node={project.parent}
      banner={project.cover.childImageSharp.resize.src}
      individual={true}
    />
    <PBox py={10} px={[6, 6, 8, 10]}>
      <Category>{project.category}</Category>
      <h1>{project.title_detail}</h1>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: project.desc }} />
      </Description>
    </PBox>
    <Content bg={project.color} py={10}>
      <PBox px={[6, 6, 8, 10]}>
        {images.edges.map(image => (
          <Img key={image.node.childImageSharp.fluid.src} fluid={image.node.childImageSharp.fluid} />
        ))}
      </PBox>
    </Content>
    <PBox py={10} px={[6, 6, 8, 10]}>
      <h2>Want to start your own project?</h2>
      <PButton color={project.color} py={4} px={8}>
        Contact Us
      </PButton>
    </PBox>
  </Layout>
)

export default Project

export const query = graphql`
  query ProjectTemplate($slug: String!, $images: String!) {
    project: projectsYaml(slug: { eq: $slug }) {
      title_detail
      color
      category
      desc
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
