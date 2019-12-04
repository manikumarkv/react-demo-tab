import React, {Suspense} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// import SiteAdminPage from './siteAdmin.page';
import SuperAdminPage from './superAdmin.page';
const SiteAdminPage = React.lazy(() => import('./siteAdmin.page'));
export default class AboutPage extends React.Component {
    render() {
        return (

            <Switch>
                <Route path="/about/admin">
                    <Switch>
                        <Route path="/about/admin/site">
                            <Suspense fallback={<div>Loading...</div>}>
                                <SiteAdminPage />
                            </Suspense>
                        </Route>
                        <Route path="/about/admin/super">
                            <SuperAdminPage></SuperAdminPage>
                        </Route>
                        <Route path="/about/admin">
                            <div>this is normal admin page</div>
                        </Route>
                    </Switch>
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