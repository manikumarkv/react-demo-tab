import React from 'react';
import './components/AppHeader.css';
import AppSidebar from './components/AppSidebar';
import { connect } from 'react-redux';
import { updateUsers, updateSelectedUser, clearStore } from './actions'
import AppContainer from './components/AppContainer';
import AboutPage from './pages/about.page';
import DashboardPage from './pages/dashboard.page';
import LoginPage from './pages/login.page';
import UsersPage from './pages/users.page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    console.log(this.props.users)

    return (
      <Router>
        <div>

          <Switch>
            
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="/login/about">
              <AboutPage />
            </Route>
            <Route path="/login/dsg">
              <AboutPage />
            </Route>




            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (uStore) => ({
  users: uStore.users,
  user: uStore.selectedUser
});

// const mapDispatchToProps = (dispatch) => ({
//   updatXYZ: (users) => dispatch(updateUsers(users)),
//   decreaseAction: () => dispatch(decreaseAction()),
// }); 


export default connect(mapStateToProps, null)(App);

