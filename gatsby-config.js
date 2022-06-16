module.exports = {
    siteMetadata: {
        title: `모든마케팅`,
        description:
        "병원, 치과, 한의원, 변호사 등 전문직 마케팅 전문 모든마케팅입니다.",
        siteUrl: `http://www.moden.marketing/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-sitemap",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                manualInit: true,
                modulePath: `${__dirname}/src/cms/cms.ts`,
                publicPath: "cms",
                htmlFavicon: "src/assets/logoCircle.png",
                customizeWebpackConfig: (config, { stage, plugins }) => {
                    config.resolve = {
                        ...config.resolve,
                        alias: {
                            ...config.resolve.alias,
                            path: require.resolve("path-browserify")
                        },
                        fallback: {
                            ...config.resolve.fallback,
                            fs: false,
                            child_process: false,
                            module: false
                        }
                    };
                    if (stage === "build-javascript" || stage === "develop") {
                        config.plugins.push(plugins.provide({ process: "process/browser" }));
                    }
                    config.plugins.push(plugins.provide({ Buffer: ["buffer", "Buffer"] }));
                }
            }
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "http://www.moden.marketing",
                sitemap: "http://moden.markeing/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-styled-components",
        `gatsby-plugin-anchor-links`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: "[data-sal]", // Selector of the elements to be animated
                animateClassName: "sal-animate", // Class name which triggers animation
                disabledClassName: "sal-disabled", // Class name which defines the disabled state
                rootMargin: "0% 50%", // Corresponds to root's bounding box margin
                enterEventName: "sal:in", // Enter event name
                exitEventName: "sal:out", // Exit event name
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        //{
        //   resolve: "gatsby-plugin-channel",
        //  options: {
        //  channelPluginSettings: {
        //    pluginKey: '575f7dfb-1537-4fde-bc60-ce2c7d923d1d'
        //   },
        //   },
        //  },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-K26075SSRD", // Google Analytics / GA
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "401592791878972",
            },
        },
    ],
};
