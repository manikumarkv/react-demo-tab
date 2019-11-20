import React from 'react'

export default class AppSidebar extends React.Component {
    static defaultProps  ={
        title:'default title'
    }
    constructor(props) {
        super(props)
        this.state = {
            something: true
        }
    }

    buttonClicked = () => {
        this.setState({
            something: !this.state.something
        })
        this.props.doSomething()
        // alert(1)
    }

    render() {
        return <button onClick={this.buttonClicked}>click me {this.props.title}</button>
    }
}

// AppSidebar.defaultProps = {
//     title: 'demo app title'
// }