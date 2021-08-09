import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {SNOWFLAKE_BROWNIAN, SNOWFLAKE_KOCH} from '../../config/routes';

const Menu: React.FC = () => {
    return (
        <Fragment>
                <Link to={SNOWFLAKE_BROWNIAN.PATH} >
                    <Button>Brownian</Button>
                </Link>
            <Link to={SNOWFLAKE_KOCH.PATH} >
                    <Button>Koch</Button>
                </Link>
        </Fragment>
    );
}

export default Menu;
