module.exports = {
  siteMetadata: {
      title: `FrontFlex`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": ""
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};