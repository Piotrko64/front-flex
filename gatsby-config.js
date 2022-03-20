module.exports = {
    siteMetadata: {
        title: `FrontFlex`,
        siteUrl: `https://www.fronflex.netlify.app`,
    },
    plugins: [
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "fb35a33e6f2034ec96dd2122bee127",
                previewMode: false,
                disableLiveReload: false,
            },
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-image",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`,
    ],
};
