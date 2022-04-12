const bday = new Date('2 December 2006 00:03:33 GMT');
const ageMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

const age = ageMilliseconds / YEAR;

const siteMetadata = {
  title: 'Vince',
  author: 'Vince',
  headerTitle: '',
  description:
    'I\'m a ~'+age.toPrecision(7)+' yo boi, and a french junior developer. Currently learning everything. Love making open source projects on Github.',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://vince.cafe',
  siteRepo: 'https://github.com/VinceTheGenius/vince.cafe',
  siteLogo: '/public/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'halo@fiqrychoerudin.dev',
  github: 'https://github.com/VinceTheGenius',
  twitter: 'https://twitter.com/VinceTheGenius',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: true,
    googleAnalyticsId: 'G-8LX651HGWT',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
