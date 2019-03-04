import React from 'react'
import Helmet from 'react-helmet'

type Props = { url: string; title: string; desc: string; image: string; locale: string } & typeof defaultProps

const defaultProps = {
  name: '',
  type: 'website',
}

const Facebook = ({ url, title, desc, image, locale, name, type }: Props) => (
  <Helmet>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
  </Helmet>
)

Facebook.defaultProps = defaultProps

export default Facebook
