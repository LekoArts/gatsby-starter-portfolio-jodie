import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

interface ChildImageSharp {
  childImageSharp: {
    fluid: any
  }
}

interface PageProps {
  data: {
    firstProject: {
      title: string
      slug: string
      cover: ChildImageSharp
    }
    threeProjects: {
      edges: {
        node: {
          title: string
          slug: string
          cover: ChildImageSharp
        }
      }[]
    }
    aboutUs: ChildImageSharp
    instagram: ChildImageSharp
  }
}

const Area = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'first-project about-us about-us'
    'three-projects three-projects three-projects'
    'instagram instagram instagram';
`

const Base = styled(Link)`
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
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes[4]};
    padding: ${props => props.theme.space[6]};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    > div img {
      transform: scale(1.1);
    }
  }
`

const FirstProject = styled(Base)`
  grid-area: first-project;
`

const AboutUs = styled(Base)`
  grid-area: about-us;
`

const ThreeProjects = styled.div`
  grid-area: three-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Instagram = styled(Base)`
  grid-area: instagram;
`

const Index: React.FunctionComponent<PageProps> = ({ data: { firstProject, threeProjects, aboutUs, instagram } }) => (
  <Layout>
    <Area>
      <FirstProject to={firstProject.slug}>
        <Img fluid={firstProject.cover.childImageSharp.fluid} />
        <span>{firstProject.title}</span>
      </FirstProject>
      <AboutUs to="/about">
        <Img fluid={aboutUs.childImageSharp.fluid} />
        <span>About</span>
      </AboutUs>
      <ThreeProjects>
        {threeProjects.edges.map(({ node: project }) => (
          <Base to={project.slug} key={project.slug}>
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.title}</span>
          </Base>
        ))}
      </ThreeProjects>
      <Instagram to="/instagram">
        <Img fluid={instagram.childImageSharp.fluid} />
        <span>Instagram</span>
      </Instagram>
    </Area>
  </Layout>
)

export default Index

export const query = graphql`
  query IndexQuery {
    firstProject: projectsYaml {
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
    threeProjects: allProjectsYaml(limit: 3, skip: 1) {
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
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    instagram: file(sourceInstanceName: { eq: "images" }, name: { eq: "instagram" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
