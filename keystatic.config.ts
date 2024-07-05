import { config, fields, collection } from '@keystatic/core';
export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'CommerceQuest Admin',      
      // mark: ({ colorScheme }) => {
      //   let path = colorScheme === 'dark'
      //     ? '/icon.svg'
      //     : '/icon.svg';
        
      //   return <img src={path} height={24} />
      // },
    },
  },
  collections: {
    posts: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "SEO-friendly slug",
            description: "Don't change the slug once a file is published!",
          },
        }),
        description: fields.text({
          label: "Description",
          description: "A short description of the post.",
          validation: { isRequired: true },
        }),
        notes: fields.mdx({
          label: "Notes",
          description: "Internal notes for this post.",
        }),
        content: fields.text({
          label: 'Main content',
          // formatting: true,
          // dividers: true,
          // links: true,
          // images: true,
        }),
        // draft: fields.checkbox({
        //   label: "Draft",
        //   description:
        //     "Set this post as draft to prevent it from being published.",
        // }),
        authors: fields.array(
          fields.relationship({
            label: "Post author",
            collection: `authors`,
          }),
          {
            label: "Authors",
            validation: { length: { min: 1 } },
            itemLabel: (props) => props.value || "Please select an author",
          },
        ),
        pubDate: fields.date({ label: "Publish Date" }),
        updatedDate: fields.date({
          label: "Updated Date",
          validation: { isRequired: true },
          description:
            "If you update this post at a later date, put that date here.",
        }),
        cardImage: fields.image({
          label: "Hero Image",
          publicPath: "../",
          validation: { isRequired: true },
        }),
        cardImageAlt: fields.text({
          label: "Hero Image Alt Text",
          description: "Describe the image for screen readers.",
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: "Tags" }), {
          label: "Tags",
          description: "This is NOT case sensitive.",
          itemLabel: (props) => props.value,
          validation: { length: { min: 1 } },
        }),
      },
    }),
    authors: collection({
      label: `Authors`,
    slugField: "name",
    path: `src/content/authors/*/`,
    columns: ["name"],
    entryLayout: "content",
    format: { contentField: "bio" },
    schema: {
      name: fields.slug({
        name: {
          label: "Name",
          validation: {
            isRequired: true,
          },
        },
        slug: {
          label: "SEO-friendly slug",
          description: "Never change the slug once this file is published!",
        },
      }),
      authorImage: fields.image({
        label: "Author avatar",
        publicPath: "../",
        validation: { isRequired: true },
      }),
      authorImageAlt: fields.text({
        label: "Author avatar alt text",
        description: "Describe the image for screen readers.",
        validation: { isRequired: true },
      }),
      role: fields.text({
        label: "Role",
        description: "Job + Company",
        validation: { isRequired: true },
      }),
      email: fields.text({
        label: "The author's email",
        description: "This must look something like `you@email.com`",
        validation: { isRequired: true },
      }),
      authorLink: fields.url({
        label: "Author Website or Social Media Link",
        validation: { isRequired: true },
      }),
      bio: fields.mdx({
        label: "Full Bio",
        description: "The author's full bio",
        options: {
          bold: true,
          italic: true,
          strikethrough: true,
          code: true,
          heading: [2, 3, 4],
          blockquote: true,
          orderedList: true,
          unorderedList: true,
          table: false,
          link: true,
          image: {
            directory: "src/content/authors/",
            publicPath: "../",
          },
          divider: true,
          codeBlock: false,
        },
      }),
    },
  })
  },
});