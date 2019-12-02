import React from 'react';

export default class DashboardPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const id  = this.props.match.params.id
    return <div>this is dashboard page - {id}</div>
    }
}