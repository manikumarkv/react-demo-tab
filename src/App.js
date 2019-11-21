import React from 'react';
// import logo from './logo.svg';
import AppHeader from './components/AppHeader'
import './components/AppHeader.css';
import AppSidebar from './components/AppSidebar';
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
   
    return (
      <div className="headerContainer">
        {/* <AppHeader  >          
          <h1>hello html 12121212</h1>
        </AppHeader> */}
        <button onClick={this.updateTitle}>
          app button
        </button>
        <AppSidebar title={this.title} doSomething={this.doSomethingOnChildAction}></AppSidebar>
      {/* <AppContainer></AppContainer> */}
      </div>
    );
  }
}





export default App;

