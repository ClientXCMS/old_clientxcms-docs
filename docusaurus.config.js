// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = 
{
  title: 'ClientXCMS Docs',
  tagline: 'Bienvenue sur notre espace de documentation dédié à CLIENTXCMS',
  url: 'https://docs.clientxcms.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/favicon.ico',
  organizationName: 'clientxcms', // Usually your GitHub org/user name.
  projectName: 'clientxcms-docs', // Usually your repo name.

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
      metadata: [{name: 'keywords', content: 'CMS,CLIENTX,Clientx,docs,doc,blog'}],
      navbar: {
        title: 'CLIENTXCMS Docs',
        logo: {
          alt: 'CLIENTXCMS Logo',
          src: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/logo-for-docs.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
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
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `L'équipe de ClientXCMS tient à vous mettre en garde que cette documentation est toujours en cours d'écriture donc si vous remarquez des problèmes n'hésités pas nous en faire part.`,
        backgroundColor: '#828eb7',
        textColor: '#000000',
        isCloseable: false,
      },
      footer: {
        style: 'dark',
        links: [
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
        logo: {
          alt: 'Logo',
          src: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/Fichier-24_2x.webp',
          href: 'https://clientxcms.com/',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} ClientXCMS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    i18n: {
      defaultLocale: 'fr',
      locales: ['fr'],
      localeConfigs: {
        fr: {
          htmlLang: 'fr-FR',
        },
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
    scripts: [{src: 'https://clientxcms.com/tracking-docs.js'}],
};

module.exports = config;