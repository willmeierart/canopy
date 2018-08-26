const UrlPrettifier = require('next-url-prettifier').default
const qs = require('qs')

// custom router a la next-url-prettifier

const routes = [
  {
    page: 'index',
    title: 'Home',
    description: '',
    prettyUrl: '/about',
    prettyUrlPatterns: [
      {
        pattern: '/:ext',
        defaultParams: {
          ext: 'about'
        }
      }
    ]
  },
  {
    page: 'dox',
    title: 'Dox',
    description: '',
    prettyUrl: '/dox',
    prettyUrlPatterns: [
      {
        pattern: '/dox',
      }
    ]
  }
  // {
  //   page: 'washes',
  //   title: 'Car Washes',
  //   description: '',
  //   prettyUrl: ({ title }) => {
  //     // client
  //     const root = title === 'Car Washes'
  //     return root
  //       ? '/carwash/washes'
  //       : `/carwash/washes/${title.toLowerCase().replace(' ', '-')}`
  //   },
  //   prettyUrlPatterns: [
  //     // server
  //     {
  //       pattern: '/carwash/washes/:title',
  //       defaultParams: {
  //         title: 'exterior-washes'
  //       }
  //     },
  //     {
  //       pattern: '/carwash/washes',
  //       defaultParams: {
  //         title: 'exterior-washes'
  //       }
  //     }
  //   ],
  //   children: [
  //     { title: 'Exterior Washes' },
  //     { title: 'Full Service' },
  //     { title: 'Express Detail' },
  //     { title: 'Fleet Accounts' },
  //     { title: 'Specials' }
  //   ]
  // }
]

// const urlPrettifier = new UrlPrettifier(routes)
const Router = new UrlPrettifier(routes, {
  paramsToQueryString: params =>
    params.query ? `?${qs.stringify(params.query)}` : ''
})

exports.routes = routes
exports.Router = Router
