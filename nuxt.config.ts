export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ['@/assets/scss/default.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/utils.scss";',
        },
      },
    },
  },
  pages: true,
  app: {
    head: {
      title: 'Vylo | The sports app of the Internet',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Vylo | The sports app of the Internet',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: 'Vylo | The sports app of the Internet',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content:
            'Video reactions to top sports news, sportsbooks, and fantasy sports from professional athletes, sports personalities, and creators',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://vylo.com/og.jpg',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Vylo | Sports HQ: Sports news, Sportsbook, Fantasy Sports',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'https://vylo.com/og-twitter.jpg',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
    },
  },
  modules: ['@nuxt/image'],
  // Serve image assets to webp and avif
  image: {
    format: ['avif', 'webp'],
  },
  imports: {
    dirs: ['store', 'animations', 'utils/animations'],
  },
  routeRules: {
    // Cache all assets
    // 1 year: 60 seconds × 60 minutes × 24 hours × 365 days = 31536000 seconds
    '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000' } },
  },
});
