import React from 'react';
// import logo from './logo.svg';
import AppHeader from './components/AppHeader'
import './components/AppHeader.css';
import AppSidebar from './components/AppSidebar';

class App extends React.Component {

  doSomethingOnChildAction() {
    console.log('hello demo')
    alert('parent component logic can execute')
  }

  render() {
   
    return (
      <div className="headerContainer">
        <AppHeader  >
          <h1>hello html 12121212</h1>
          <h1>hello html 12121212</h1>
          <h1>hello html 12121212</h1>
          <h1>hello html 12121212</h1>
        </AppHeader>
        <AppSidebar title="this is buttis" doSomething={this.doSomethingOnChildAction}></AppSidebar>
      </div>
    );
  }
}





export default App;

