/**
 * * This is the Keystatic configuration file. It is used to define the collections and fields that will be used in the Keystatic CMS.
 *
 * ! This works in conjunction with Astro content collections. If you update one, you must update the other.
 *
 * Access keystatic interface at /admin or /keystatic
 * This works in local mode in dev, then cloud mode in prod
 * Cloud deployment is free to sign up (up to 3 users per team)
 * Docs: https://keystatic.com/docs/cloud
 * Create a Keystatic Cloud account here: https://keystatic.cloud/
 */

import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: "CQ Admin" },
  },
  collections: {
    posts: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        contents: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        // author: fields.string({ name: { label: 'Author' } }),
        // authorImage: fields.image({ name: { label: 'Author Image' } }),
        // pubDate: fields.date({ name: { label: 'Publish Date' } }),
        // cardImage: fields.image({ name: { label: 'Card Image' } }),
        // cardImageAlt: fields.string({ name: { label: 'Card Image Alt' } }),
        // readTime: fields.string({ name: { label: 'Read Time' } }),
      },
    }),
  },
});