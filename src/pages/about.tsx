import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm LekoArts!</h1>
        <p>
          You can visit my <a href="https://www.lekoarts.de/en">website</a> or my other{' '}
          <a href="https://gatsby-starter-portfolio.netlify.com">Gatsby projects</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
