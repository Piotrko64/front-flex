module.exports = {
    siteMetadata: {
        title: `FrontFlex`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "fb35a33e6f2034ec96dd2122bee127",
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
    ],
};
