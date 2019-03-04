// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.tsx')

  const result = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          edges {
            node {
              slug
              images
            }
          }
        }
      }
    `)
  )

  result.data.projects.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
        images: `/${edge.node.images}/`,
      }
    })
  })
}