module.exports = {
    siteMetadata: {
        title: `Blog`,
        author: {
            name: `Oluwakeye John`,
            summary: `Making the web better`,
            work: `Fullstack web developer`,
            address: `Lives in Lagos, Nigeria`,
            website: `https://oluwakeyejohn.netlify.app`
        },
        description: `My blog.`,
        siteUrl: `https://oluwakeye-blog.netlify.app`,
        social: {
            twitter: `oluwakeyejohn`,
            github: `oluwakeye-john`,
            medium: `@oluwakeyejohn`,
            email: `bjohnoluwakeye@gmail.com`
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/img`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        offsetY: `105`,
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="jam jam-hashtag"><path d='M6 6v2h2V6H6zm0-2h2V1a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2h-3v2h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H6v3a1 1 0 0 1-2 0v-3H1a1 1 0 1 1 0-2h3V6H1a1 1 0 1 1 0-2h3V1a1 1 0 1 1 2 0v3z'/></svg>`,
                        removeAccents: true,
                        isIconAfterHeader: true,
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `My Blog`,
                short_name: `Blog`,
                start_url: `/`,
                background_color: `#343A40`,
                theme_color: `#343A40`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify-cms`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
