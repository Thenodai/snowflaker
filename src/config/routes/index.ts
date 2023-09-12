import { FunctionComponent } from 'react'
import { snowflakesRoutes } from './snowflakes'
import { wavesRoutes } from './waves'

export interface RouteConfig {
  NAME: string;
  PATH: string;
}

export interface CompositeRouteConfig {
  name: string;
  component: FunctionComponent;
  path: string;
}

export default {
  flakes: snowflakesRoutes,
  waves: wavesRoutes,
}
