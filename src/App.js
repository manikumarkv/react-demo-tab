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
  NavLink,
  Redirect
} from "react-router-dom";
import NotFoundPage from './pages/notFound.page';

function isUserLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isUserLoggedIn() ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
      }
    />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    console.log(this.props.users)

    return (
      <Router>

        <div>
          {/* <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
              <ul>
                <li>
                  <Link to="/about/admin">Admin</Link>
                  <ul>
                    <li>
                      <Link to="/about/admin/super">Super Admin</Link>
                    </li>
                    <li>
                      <Link to="/about/admin/site">Site Admin</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about/manager">Manager</Link>
                </li>
              </ul>
            </li>

          </ul> */}

          <Switch>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/about" component={AboutPage} >

            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <PrivateRoute path="/dashboard">
              <div>dashboard page</div>
            </PrivateRoute>
            <Route component={NotFoundPage}></Route>


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

