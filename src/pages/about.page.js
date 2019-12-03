import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class AboutPage extends React.Component {
    render() {
        return (

            <Switch>
                <Route path="/about/admin">
                    <div>this is admin page</div>
                </Route>

                <Route path="/about/manager">
                    <div>this is manager  page</div>
                </Route>
                <Route path="/">
                    <div>this is about page</div>
                </Route>
            </Switch>
        )
    }
}