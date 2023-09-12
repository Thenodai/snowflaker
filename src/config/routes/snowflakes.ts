import BrownianSnowflake from '../../Component/Flakes/Brownian'
import KochSnowflake from '../../Component/Flakes/Koch'
import { CompositeRouteConfig, RouteConfig } from './index'

const SNOWFLAKE_BROWNIAN: RouteConfig = {
  NAME: 'SNOWFLAKE_BROWNIAN',
  PATH: '/snowflakes/brownian',
};
const SNOWFLAKE_KOCH: RouteConfig = {
  NAME: 'SNOWFLAKE_KOCH',
  PATH: '/snowflakes/koch'
};

export const snowflakesRoutes: Array<CompositeRouteConfig> = [
  {
    name: SNOWFLAKE_BROWNIAN.NAME,
    component: BrownianSnowflake,
    path: SNOWFLAKE_BROWNIAN.PATH
  },
  {
    name: SNOWFLAKE_KOCH.NAME,
    component: KochSnowflake,
    path: SNOWFLAKE_KOCH.PATH
  }
];
