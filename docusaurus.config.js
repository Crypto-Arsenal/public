/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Crypto Arsenal',
  tagline: 'Documentation & Blog',
  url: 'https://docs.crypto-arsenal.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Crypto-Arsenal', // Usually your GitHub org/user name.
  projectName: 'public', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      appId: 'B8HNR07N3Q',

      // Public API key: it is safe to commit it
      apiKey: '6ba72ecb9cd8a7f76731ea0415b86339',

      indexName: 'dev_crypto_arsenal',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-JRERR47R34',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    googleAnalytics: {
      trackingID: 'G-JRERR47R34',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    navbar: {
      // style: 'dark',
      title: 'Crypto Arsenal',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'developer/get-started/python/hello-world',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'articles/indicator/get-started',
          label: 'Article',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://crypto-arsenal.io/',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [

            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussion',
              href: 'https://github.com/Crypto-Arsenal/public/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/x8TTVEnG',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/TG_Crypto_Arsenal',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MCryptoarsenal',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@crypto.arsenal.mrkt',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Crypto-Arsenal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Arsenal, Inc. Built with ❤️`,
    },
  },
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
  },

  presets: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Crypto-Arsenal/public/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Crypto-Arsenal/public/edit/master/blog/',
          // routeBasePath: '/',
          path: 'blog',
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Crypto Arsenal`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
