const express = require('express')
const next = require('next')
const compression = require('compression')
const Router = require('./routes').Router
const sitemap = require('./sitemap')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express().use(compression()).use('/static', express.static('static'))
	sitemap({ server })

	Router.forEachPattern((
		page,
		pattern,
		defaultParams // this function comes from next-url-prettifier
	) =>
		server.get(pattern, (req, res) =>
			app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
		)
	)

	server.get('*', (req, res) => handle(req, res))

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
