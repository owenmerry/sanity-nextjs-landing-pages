export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f8f440b7e8cf30c0ef2c335',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jzshz5q2',
                  apiId: '7539236b-acbe-4b55-a695-fd3e20937e1a'
                },
                {
                  buildHookId: '5f8f440b82401e008820376a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zutnsab6',
                  apiId: '43bbff2e-3e0f-4a9d-8c76-6a46e22aba6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/owenmerry/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zutnsab6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
