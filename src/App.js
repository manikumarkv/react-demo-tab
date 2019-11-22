import React from 'react';
import './components/AppHeader.css';
import AppSidebar from './components/AppSidebar';
import {connect} from 'react-redux';
import {updateUsers,updateSelectedUser, clearStore} from './actions'
import AppContainer from './components/AppContainer';

class App extends React.Component {
  constructor(props){
    super(props)
    this.updateTitle = this.updateTitle.bind(this)
    this.state= {
      appTitle:'this is buttis'
    }
    this.title = "sdsd"
  }

  doSomethingOnChildAction() {
    console.log('hello demo')
    alert('parent component logic can execute')
  }
  updateTitle(){
    this.title = "new val"
   this.setState({
    appTitle:'dfsfgfg df'
   })
  }

  render() {
    console.log(this.props.users)
   
    return (
      <div className="headerContainer">
       
       {this.props.users.map((user, index) => {
       return (<div key={index}>{user.name}</div>)
       })}
       <AppContainer></AppContainer>
      <div>{this.props.user.name}</div>
      </div>
    );
  }
}


const mapStateToProps = (uStore) => ({
  users: uStore.users,
  user:uStore.selectedUser
});

// const mapDispatchToProps = (dispatch) => ({
//   updatXYZ: (users) => dispatch(updateUsers(users)),
//   decreaseAction: () => dispatch(decreaseAction()),
// }); 


export default connect(mapStateToProps, null)(App);

