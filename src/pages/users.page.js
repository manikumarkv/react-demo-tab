import React from 'react';
import { Link, Route, Switch, useParams, BrowserRouter as Router, } from 'react-router-dom'
import LoginPage from './login.page';

export default function UsersPage(props) {

    const params = useParams().id

    return (
        <Switch>
            <Route path="/admin">
                <LoginPage />
            </Route>
            <Route path="/assistant/:id" component={LoginPage}>
                {/* <LoginPage /> */}
            </Route>
            <Route path="/manager">
                <LoginPage />
            </Route>
            <Route path="/">
               

            </Route>
        </Switch>
    )
}
