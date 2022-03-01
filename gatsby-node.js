const path = require(`path`);
// const wrapper = (promise) =>
//     promise.then((result) => {
//         if (result.erros) {
//             throw result.errors;
//         }
//         return result;
//     });

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
                    }
                }
            }
        }
    `);
    console.log(result.data);
    result.data.allDatoCmsFlex.edges.forEach((edge) => {
        createPage({
            path: `${edge.node.slug}`,
            component: articleTemplate,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
