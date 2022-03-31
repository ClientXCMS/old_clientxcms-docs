// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClientXCMS Docs',
  tagline: 'Bienvenue sur notre espace de documentation dédié à CLIENTXCMS',
  url: 'https://docs.clientxcms.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'clientxcms', // Usually your GitHub org/user name.
  projectName: 'clienetxcms-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ClientXCMS/clientxcms-docs/edit/master',

        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ClientXCMS/clientxcms-docs/edit/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CLIENTXCMS Docs',
        logo: {
          alt: 'CLIENTXCMS Logo',
          src: 'img/Favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://clientxcms.com',
            label: 'Retour au site',
            position: 'right',
          },

          /*{
            type: 'localeDropdown',
            position: 'right',
          },*/
        ],
      },

      /*announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `content`,
      },*/
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communautés',
            items: [
              {
                label: 'Retour au site',
                href: 'https://clientxcms.com',
              },
              {
                label: 'Discord',
                href: 'https://clientxcms.com/ref/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ClientXCMS',
              },
            ],
          },
          {
            title: 'Liens utils',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ClientXCMS/clientxcms-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ClientXCMS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
