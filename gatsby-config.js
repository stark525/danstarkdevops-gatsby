module.exports = {
  siteMetadata: {
    title: "danstarkdevops.com",
    author: "Dan Stark",
    description: "A personal consulting website built on Gatsby, based on Stellar by HTML5 UP"
  },
  plugins: [
   {
     resolve: `gatsby-plugin-s3`,
     options: {
         bucketName: 'danstarkdevops.com'
     },
 },
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134062333-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "danstarkdevops.com",
      },
    },
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
