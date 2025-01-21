/** @type {import('next-sitemap').IConfig} */
let index = 0;

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.smartbills.io',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    index += 1;
    if (index % 2) {
      return;
    }
    path = path.split(".")[0];

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  alternateRefs: [
    {
      href: 'https://docs.smartbills.io/en-CA',
      hreflang: 'en-CA',
    },
    {
      href: 'https://docs.smartbills.io/fr-CA',
      hreflang: 'fr-CA',
    },
  ],
}