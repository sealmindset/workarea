import Workarea from "@workarea/core"
import routes from "./routes.js.erb"

const controllers = require.context(
  "workarea/storefront/controllers", true, /_controller\.js$/
)

export default { controllers, routes }
