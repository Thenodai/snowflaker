import { CompositeRouteConfig, RouteConfig } from './index'
import SinusoidalWave from '../../Component/Waves/Sinusoidal';

const SINUSOIDAL_WAVE: RouteConfig = {
  NAME: 'SINUSOIDAL_WAVE',
  PATH: '/waves/sinusoidal'
}

export const wavesRoutes: Array<CompositeRouteConfig> = [
  {
    name: SINUSOIDAL_WAVE.NAME,
    component: SinusoidalWave,
    path: SINUSOIDAL_WAVE.PATH
  },
];
