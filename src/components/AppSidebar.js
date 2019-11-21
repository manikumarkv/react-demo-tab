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

    componentWillReceiveProps(newVal) {
         
        console.log('props', this.props, newVal)
    }

    buttonClicked = () => {
        this.setState({
            something: !this.state.something
        })
        this.props.doSomething()
        // alert(1)
    }

    render() {
        return <div >click me {this.props.title}</div>
    }
}

// AppSidebar.defaultProps = {
//     title: 'demo app title'
// }