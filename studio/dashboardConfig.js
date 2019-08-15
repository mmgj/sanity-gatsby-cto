export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d5526e186fe59701884da6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-cto-studio',
                  apiId: '755de4d8-83c1-4bb3-ab8a-c9ec993e611b'
                },
                {
                  buildHookId: '5d5526e167d299c72cf831f3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-cto',
                  apiId: '066a6f32-235b-4355-b811-7d4432375f95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmgj/sanity-gatsby-cto',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-cto.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
