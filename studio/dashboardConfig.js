export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-101-studio',
                  apiId: 'a4a4f63f-36eb-4e3d-abbc-f094d4a930aa'
                },
                {
                  buildHookId: '62478cad20abb60065c11847',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-101',
                  apiId: '4e1153c1-e2ac-4a1f-b9f7-842f313f0794'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AjDigitalDesign/sanity-nuxt-events101',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-101.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
