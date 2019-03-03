import React from 'react'
import Layout from '../components/Layout'
import { Box } from '../elements'

const About = () => (
  <Layout>
    <Box py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 14]}>
      <h1>Hi. I'm LekoArts!</h1>
      <p>
        You can visit my <a href="https://www.lekoarts.de/en">website</a> or my other{' '}
        <a href="https://gatsby-starter-portfolio.netlify.com">Gatsby projects</a>.
      </p>
    </Box>
  </Layout>
)

export default About
