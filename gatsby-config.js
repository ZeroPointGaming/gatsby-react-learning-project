module.exports = {
  siteMetadata: {
    title: "Zeros Test Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `react-twitch-embed-video`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: './src/blog/',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "games",
        path: './src/pages/images/games',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: './src/pages/images',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};
