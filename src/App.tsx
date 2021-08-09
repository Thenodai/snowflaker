import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouteLoader from './app/routes';
import Menu from './Component/Menu';
import {Grid, AppBar} from "@material-ui/core";

const App = () => {
    return (
    <BrowserRouter>
        <AppBar color="secondary">
            <Grid container justifyContent={"center"} >
                <Menu />
            </Grid>
        </AppBar>
        <RouteLoader />
    </BrowserRouter>
    );
}

export default App;
