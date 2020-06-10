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
      <SEO title="About | Jodie" desc="Hi. I'm Aadithya! While I am not writing software, you can find me on a trail clicking pictures or playing some music or Tennis You can visit my Instagram or my Youtube Channel" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Aadithya!</h1>
        <p>
          While I am not writing software, you can find me on a trail clicking pictures or playing some music or Tennis
          You can visit my <a href="https://www.instagram.com/aadithyaphotography/">Instagram</a> or my {' '}
          <a href="https://www.youtube.com/channel/UCACUH8-MUb4r_myA211REZg?view_as=subscriber">Youtube Channel</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
