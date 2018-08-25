// pretty simple, but this is what controls the synthetic routing

const nextRoutes = require('next-routes')
const Router = nextRoutes()

Router.add('index', '/about', '')  // <<< transition example = this only
  .add('dox', '/dox', '')

module.exports = Router
