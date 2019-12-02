import React from 'react';
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        //const {id} = this.props.match.params
        return <div>this is login page id- <Link to="/about">go to about</Link></div>
    }
}