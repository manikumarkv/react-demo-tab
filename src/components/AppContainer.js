import React from 'react'
import { connect } from 'react-redux'
import { updateUsers, updateSelectedUser } from '../actions'
class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [{ name: 'u' }, { name: 'q' }, { name: 'h' }, { name: 'b' }, { name: 'b' }]
        }

    }

    renderUser(x) {
        let arr = [{ name: 'u', address: 'sdffd' }, { name: 'q' }, { name: 'h' }, { name: 'b' }, { name: 'b' }]

        arr.forEach((user, i) => {
            user.address = "dddd"
        })
        return (<div style={{ margin: '30px' }}>{x.name}</div>)
    }
    updateMyStore = () => {
        this.props.updatXYZ([{ name: 'new' }, { name: 'from' }, { name: 'component' }])
    }
    onTextChange = (event) => {
        const val = event.target.value

        const obj = {name: val}
        this.props.updateSectedUser(obj)
    }

    render() {

        return (
            <>
                <div style={{ border: '1px solid red' }}>this is container div
            <button onClick={this.updateMyStore}>update store</button>
                </div>
                <input type="text" onChange={this.onTextChange}></input>


            </>

        )

    }
}

// arr.map()

// const mapDispatchToProps = (dispatch) => ({
//     updatXYZ: (users) => dispatch(updateUsers(users)),
//     updateSectedUser:(user) => dispatch(updateSelectedUser(user))
// });

export default connect(null, function (dispatch) {
    return {
        updatXYZ: (users) => dispatch(updateUsers(users)),
        updateSectedUser: (user) => dispatch(updateSelectedUser(user))
    }
})(AppContainer)