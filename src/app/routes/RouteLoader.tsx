import React, {Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import routesConfig from '../../config/routes';
import {Grid} from "@material-ui/core";

const RouteLoader = () => (
    <Fragment>
        <Switch>
            <Grid container justifyContent={"center"}>
                {
                    routesConfig.map((route) => (
                        <Route key={route.name} component={route.component} path={route.path} exact/>
                    ))
                }
            </Grid>
        </Switch>
    </Fragment>
);

export default RouteLoader;
