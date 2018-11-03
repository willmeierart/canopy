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
				pattern: '/about'
			}
		]
	},
	{
		page: 'qora',
		title: 'Qora',
		description: '',
		prettyUrl: '/games/qora',
		prettyUrlPatterns: [
			{
				pattern: '/games/qora'
			}
		]
	},
	{
		page: 'torla',
		title: 'Torla',
		description: '',
		prettyUrl: '/games/torla',
		prettyUrlPatterns: [
			{
				pattern: '/games/torla'
			}
		]
	},
	{
		page: 'dox',
		title: 'Dox',
		description: '',
		prettyUrl: '/games/dox',
		prettyUrlPatterns: [
			{
				pattern: '/games/dox'
			}
		]
	},
	{
		page: 'portfolio',
		title: 'Portfolio',
		description: '',
		prettyUrl: '/film/portfolio',
		prettyUrlPatterns: [
			{
				pattern: '/film/portfolio'
			}
		]
	},
	{
		page: 'wtfami',
		title: 'Where the Fuck Am I?',
		description: '',
		prettyUrl: '/film/wtfami',
		prettyUrlPatterns: [
			{
				pattern: '/film/wtfami'
			}
		]
	}
]

// const urlPrettifier = new UrlPrettifier(routes)
const Router = new UrlPrettifier(routes, {
	paramsToQueryString: params => (params.query ? `?${qs.stringify(params.query)}` : '')
})

exports.routes = routes
exports.Router = Router
