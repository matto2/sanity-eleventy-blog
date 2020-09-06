export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f54f7421e2b2f29eeb673f8',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ed7ws1h5',
                  apiId: 'd68c898f-5826-433f-91e6-59e5fb7fbf80'
                },
                {
                  buildHookId: '5f54f74272c945529af31ffd',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m3pwijwo',
                  apiId: '9481ccc8-35d9-434c-bf8a-5f6d6d47349f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matto2/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m3pwijwo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
