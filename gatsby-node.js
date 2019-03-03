const wrapper = promise =>
  promise
    .then(result => {
      if (result.errors) {
        throw result.errors
      }
      return { result, error: null }
    })
    .catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.tsx')

  const { error, result } = await wrapper(
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

  if (!error) {
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

    return
  }

  console.log(error)
}