const { readFileSync } = require('fs')
const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
	defaultShowCopyCode: true,
	highlight: {
		theme: 'github-light', // Use the GitHub Light theme
	},
	mdxOptions: {
		rehypePrettyCodeOptions: {
			// VSCode theme or built-in Shiki theme, see Shiki documentation for more information
			theme: JSON.parse(
				readFileSync('./public/github-light.json', 'utf8')
			)
		}
	}
})


module.exports = withNextra({
	i18n: {
		locales: ['en-CA', 'fr-CA'],
		defaultLocale: 'en-CA',
		localeDetection: false,
	},
	trailingSlash: true,

})
