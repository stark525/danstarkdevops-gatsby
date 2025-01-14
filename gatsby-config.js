module.exports = {
  siteMetadata: {
    title: "danstarkdevops.com",
    author: "Dan Stark",
    description: "A personal consulting website, built on Gatsby",
    siteUrl: `https://danstarkdevops.com`
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-134062333-1",
        },
      },
    {
       resolve: `gatsby-plugin-s3`,
       options: {
           bucketName: 'danstarkdevops.com'
       },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
