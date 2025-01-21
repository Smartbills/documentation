import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

interface Frontmatter {
  title: string;
  overrideTitle: string;
  description: string;
  ogImage: string;
}

const searchPlaceholder = {
  "fr-CA": "Rechercher dans la documentation",
  "en-CA": "Search documentation",
};
const edit = {
  "fr-CA": "Modifier cette page",
  "en-CA": "Edit this page",
};
const feedback = {
  "fr-CA": "Question ? Donnez-nous votre avis →",
  "en-CA": "Question? Give us feedback →",
};
const onThisPage = {
  "fr-CA": "Sur cette page",
  "en-CA": "On this page",
};
const banner = {
  "fr-CA": {
    link: "https://smartbills.io/fr-CA/blog/v1.0.0",
    title: "🎉 Smartbills v1.0.0 est sorti. Lire la suite →",
  },
  "en-CA": {
    link: "https://smartbills.io/en-CA/blog/v1.0.0",
    title: "🎉 Smartbills v1.0.0 is released. Read more →",
  },
};

const config: DocsThemeConfig = {
  head: function () {
    const { locale } = useRouter();
    return (
      <>
        <meta name="language" content={locale} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cdn.smartbills.io/public/assets/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="shortcut icon"
          href="https://cdn.smartbills.io/public/assets/favicon.ico"
        />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const nextraConfig = useConfig();

    const frontMatter = nextraConfig.frontMatter as Frontmatter;

    let titleTemplate = `%s – Smartbills API Documentation`;
    if (router.pathname.startsWith("/index")) {
      titleTemplate = `Smartbills API Documentation`;
    }

    const defaultTitle =
      frontMatter.overrideTitle || "Smartbills API Documentation";

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate,
    };
  },

  // banner: {
  //   key: "1.0-release",
  //   text: () => {
  //     const { locale } = useRouter();
  //     return (
  //       <a href={banner[locale].link} target="_blank">
  //         {banner[locale].title}
  //       </a>
  //     );
  //   },
  // },
  logo: () => <span>Smartbills API documentation</span>,
  project: {
    link: "https://github.com/smartbills",
  },
  docsRepositoryBase: "https://github.com/smartbills/documentation",
  footer: {
    text: "Smartbills Technologies Inc.",
  },
  search: {
    placeholder() {
      const { locale } = useRouter();
      return searchPlaceholder[locale];
    },
  },
  i18n: [
    { locale: "fr-CA", text: "Français" },
    { locale: "en-CA", text: "English" },
  ],
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: () => {
      const { locale } = useRouter();
      return edit[locale];
    },
  },
  feedback: {
    content: () => {
      const { locale } = useRouter();
      return feedback[locale];
    },
  },
  logoLink: "https://smartbills.io",
  toc: {
    title: () => {
      const { locale } = useRouter();
      return onThisPage[locale];
    },
  },
};

export default config;
