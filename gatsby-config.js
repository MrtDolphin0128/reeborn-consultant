module.exports = {
  siteMetadata: {
    title: `Reeborn`,
    description: `Reeborn est pour beaucoup la solution leur permettant de se détacher un peu du projet afin d'avoir une vision d'ensemble, en allant ensemble dans une direction commune jusqu’à maintenant inatteignable.`,
    author: `Mbk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeOnly: ["styles/", "components/"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
