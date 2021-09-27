import BrownianSnowflake from '../Component/Flakes/Brownian';
import KochSnowflake from '../Component/Flakes/Koch';

const SNOWFLAKE_BROWNIAN = {
    NAME: 'SNOWFLAKE_BROWNIAN',
    PATH: '/brownian',
};
const SNOWFLAKE_KOCH = {
    NAME: 'SNOWFLAKE_KOCH',
    PATH: '/koch'
};

const routesConfig = [
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

export {
    SNOWFLAKE_BROWNIAN,
    SNOWFLAKE_KOCH,
}

export default routesConfig;
