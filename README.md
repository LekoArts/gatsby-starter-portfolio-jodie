![](https://i.imgur.com/TlwEgUo.png)

# Gatsby Starter Portfolio: Jodie

A portfolio starter for [Gatsby](https://www.gatsbyjs.org/). The target audience are designers and photographers.

[Demo Website](https://jodie.lekoarts.de)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LeKoArts/gatsby-starter-portfolio-jodie) [![Edit gatsby-starter-portfolio-jodie](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LeKoArts/gatsby-starter-portfolio-jodie/tree/master/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f51f5488-aa2d-4e42-baa7-4182d9e81c2e/deploy-status)](https://app.netlify.com/sites/portfolio-jodie/deploys) [![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-jodie.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-jodie)

- CSS-Grid powered layout with Sidebar
- Large images & Instagram integration
- Themeable pages & automatically adapting sidebar

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site, the starters in _gatsby-starter-portfolio_ are a perfect fit for you! The project's goal is to offer minimalistic and fast websites.

I hope you like my starters and create something awesome! To see some of my work, you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me create more free starters!

Also, check out the other starters for _gatsby-starter-portfolio_:

- [gatsby-starter-portfolio-emma](https://github.com/LekoArts/gatsby-starter-portfolio-emma)
- [gatsby-starter-portfolio-emilia](https://github.com/LekoArts/gatsby-starter-portfolio-emilia)
- [gatsby-starter-portfolio-bella](https://github.com/LekoArts/gatsby-starter-portfolio-bella)
- [gatsby-starter-portfolio-cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

- Configurable
    - Use the config to easily change the most important information
    - Change the theming for styled-components
    - Navigation powered by a .yaml file
    - Layout driven by CSS-Grid
- Create your projects by creating a folder full of images and adding an entry to a .yaml file
- Shows your Instagram posts
- TypeScript
- Cypress for End-to-End testing
- react-spring animations
- Uses styled-components + styled-system for styling
- Google Analytics support
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Responsive Images
    - Right image sizes
    - Blurred loading animation
    - WebP support
    
## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-jodie
cd project-name
npm run develop
```

### Configuring the Instagram source plugin

1. You need to have a Facebook page (I know... :/)
1. Go to your site settings -> Instagram -> Login into your Instagram account
1. Create a [app](https://developers.facebook.com/apps/)
1. Go to the [Graph API Explorer][gae]
    1. Select your App from the top right dropdown menu
    1. Select "Get User Access Token" from dropdown (right of access token field) and select needed permissions (manage_pages, pages_show_list, instagram_basic)
    1. Copy user access token
1. [Access Token Debugger][atd]:
    1. Paste copied token and press "Debug"
    1. Press "Extend Access Token" and copy the generated long-lived user access token
1. [Graph API Explorer][gae]:
    1. Paste copied token into the "Access Token" field
    1. Make a GET request with "PAGE_ID?fields=access_token"
    1. Find the permanent page access token in the response (node "access_token")
1. [Access Token Debugger][atd]:
    1. Paste the permanent token and press "Debug"
    1. "Expires" should be "Never"
    1. Copy the **access token**
1. [Graph API Explorer][gae]:
    1. Make a GET request with "PAGE_ID?fields=instagram_business_account" to get your **Business ID**
    
Now create a `.env` file at the root of the project with the following content:

```
BUSINESS_ID=YOUR_ID
ACCESS_TOKEN=YOUR_TOKEN
```

You can paste your access token and Business ID there.

### Adding a new project

1. Create a new folder in `content/projects` and place your images there
1. Add your project to the `content/projects/projects.yaml` file

### Adding a new page

Create a new `.tsx` file in the `src/pages` directory

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```
Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/index.js`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Jodie', // Navigation and Site Title
  siteTitleAlt: 'Jodie - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Jodie', // short_name for manifest
  siteHeadline: 'Come & Enjoy our excellent photos', // Headline for schema.org JSONLD
  siteUrl: 'https://jodie.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Image-heavy photography portfolio with colorful accents & great typography',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jodie', // Twitter Username
  ogSiteName: 'jodie', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-XXXXXX-X',

  // Manifest and Progress color
  themeColor: '#db7436',
  backgroundColor: '#3b3c4f',
}
```

You can also configure the styling of the site by editing the theme variables in `config/theme.ts`.

```typescript
interface ThemeShape {
  breakpoints: string[]
  fontSizes: string[]
  colors: {
    [key: string]: string
  }
  space: string[]
  fontWeights: {
    [key: string]: number
  }
  sidebarWidth: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: ['480px', '650px', '1000px', '1200px', '1400px'],
  fontSizes: ['1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  colors: {
    primary: '#c66131',
    secondary: '#494992',
    grey: '#646066',
    shade: '#f5f5f5',
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebarWidth: {
    big: '375px',
    normal: '320px',
  },
}

export default theme
```

**Attention:** You also need to edit `static/robots.txt` to include your domain!

[gae]: https://developers.facebook.com/tools/explorer/
[atd]: https://developers.facebook.com/tools/debug/accesstoken/
