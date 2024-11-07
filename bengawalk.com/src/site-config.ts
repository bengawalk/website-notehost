import { NoteHostSiteConfig, googleTag } from 'notehost'
import { PAGE_SCRIPT_JS_STRING } from './_page-script-js-string'

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = 'G-Q626RY3TZM'

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: 'bengawalk.com',

  // Metatags, optional
  // For main page link preview
  siteName: 'Bengawalk',
  siteDescription: 'We&#39;re making Bengaluru more walkable with movies, writing &amp; design',
  siteImage: '',

  // Twitter handle, optional
  twitterHandle: '@bengawalk',

  // URL to custom favicon.ico
  // siteIcon: '',

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  // notionDomain: 'bengawalk.notion.site',

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  slugToPage: {
    '': 'e039df3164014e978d464dc7b56231a4',
    // contact: 'NOTION_PAGE_ID',
    // about: 'NOTION_PAGE_ID',
    // Hint: you can use '/' in slug name to create subpages
    // 'about/people': 'NOTION_PAGE_ID',
  },

  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  // pageMetadata: {
  //   'NOTION_PAGE_ID': {
  //     title: 'My Custom Page Title',
  //     description: 'My custom page description',
  //     image: 'https://imagehosting.com/images/page_preview.jpg',
  //     author: 'My Name',
  //   },
  // },

  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    www: {
      redirect: 'https://bengawalk.com',
    },
  },

  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  // fof: {
  //   page: "NOTION_PAGE_ID",
  //   slug: "404", // default
  // },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: 'Roboto',

  // Custom JS for head and body of a Notion page
  customHeadCSS: ``,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
