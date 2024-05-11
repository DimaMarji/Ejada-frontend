const withCSS = require("@zeit/next-css");
module.exports = withCSS();
/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            // { source: "/ggg", destination: "/Home" },
            {source: "/", destination: "/Home"},
            {source: "/about-us", destination: "/AboutUs"},
            {source: "/dedicated-development-teams", destination: "/DedicatedDevelopmentTeams"},
            {source: "/blogs", destination: "/Blogs"},
            {source: "/blogs/:blogTitle", destination: "/Blogs/:blogTitle"},
            {
                source: "/services/:serviceName/:subServiceName",
                destination: "/Services/:serviceName/:subServiceName",
            },
            {source: "/careers", destination: "/Careers"},
            {
                source: "/careers/:postionTitle",
                destination: "/Careers/:postionTitle",
            }, {
                source: "/careers/apply",
                destination: "/Careers/Apply",
            },
            {
                source: "/careers/:postionTitle/:positionDetailsId/:postionType",
                destination: "/Careers/:postionTitle/:positionDetailsId/:postionType",
            },
            {source: "/contact-us", destination: "/ContactUs"},
            {
                source: "/our-process/agile-development",
                destination: "/OurProcess/AgileDevelopment",
            },
            {
                source: "/our-process/ui-ux-process",
                destination: "/OurProcess/UIUXProcess",
            },
            {
                source: "/our-projects/zcoderz-platform",
                destination: "/OurProjects/ZcoderzPlatform",
            },
            {
                source: "/our-projects/ngt-website",
                destination: "/OurProjects/NGTags"
            },
            {
                source: "/our-projects/masar-gift",
                destination: "/OurProjects/MasarGift",
            },
            {
                source: "/our-projects/hooud",
                destination: "/OurProjects/Hooud",
            },
            // Errors
            {
                source: "/offline",
                destination: "/YouAreOffline",
            },
            {
                source: "/error",
                destination: "/GeneralError",
            },
            {
                source: "*",
                destination: "/Error404",
            }
        ];
    },
    devIndicators: {
        buildActivity: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "websiteback.zcoderz.com",
            },
        ],
    },
    // devIndicators: {
    //   buildActivity: false,
    // },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    experimental: {appDir: true},

    webpack(config) {
        config.module.rules.forEach((rule) => {
            const {oneOf} = rule;
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes("_app")) return;
                    one.issuer.and = [path.resolve(__dirname)];
                });
            }
        });
        return config;
    },
};

module.exports = nextConfig;
