export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a084ead95d1814b8e497e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-coswo1fu',
                  apiId: 'c9d812e6-c9d7-4a0c-82fa-450956d2c41c'
                },
                {
                  buildHookId: '62a084eae4785014fd68b35f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bdgipn4u',
                  apiId: '0317ca59-7be6-4d33-909b-bb78b9ec4a0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/goelvaibhav105/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bdgipn4u.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
