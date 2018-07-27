import {Route, IndexRoute} from 'react-router'
import Template from './containers/Template'
import React from 'react';
import Home from "./containers/Home";
import Admin from "./containers/Admin";
import Profile from "./containers/Profile";

const createRoutes = () => {
    return (<Route
            path='/'
            component={Template}
        >
            <IndexRoute component={Home}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/profile' component={Profile}/>
        </Route>
    );
};
var Routes = createRoutes();
export default Routes;