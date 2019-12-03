import React from 'react';
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }
    onLogin(){
        localStorage.setItem("isLoggedIn", "true")
    }
    render() {
        //const {id} = this.props.match.params
        return <div>
            <button onClick={this.onLogin}>Login</button>
            this is login page id- <Link to="/about">go to about</Link></div>
    }
}