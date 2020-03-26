import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {PostsPage} from './post/PostsPage';
import {PostPage} from './post/PostPage';

export const AppRouter: React.FunctionComponent<{}> = () => {
    return <Router>
        <Switch>
            <Route exact path="/posts" component={PostsPage}/>
            <Route exact path="/post/:id" component={PostPage}/>
            <Redirect to="/posts"/>
        </Switch>
    </Router>
};