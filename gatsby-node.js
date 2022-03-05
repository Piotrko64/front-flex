const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const articleTemplate = path.resolve("src/templates/article.js");

    const result = await graphql(`
        {
            allDatoCmsFlex {
                edges {
                    node {
                        slug
                        title
                        background {
                            url
                        }
                        content {
                            value
                        }
                        gallery {
                            url
                        }
                    }
                }
            }
        }
    `);

    result.data.allDatoCmsFlex.edges.forEach((edge) => {
        createPage({
            path: `/posts/${edge.node.slug}`,
            component: articleTemplate,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
