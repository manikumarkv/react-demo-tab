import React from 'react'
export default class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [{ name: 'u' }, { name: 'q' }, { name: 'h' }, { name: 'b' }, { name: 'b' }]
        }

    }

    renderUser(x) {
        let arr =[{ name: 'u', address:'sdffd' }, { name: 'q' }, { name: 'h' }, { name: 'b' }, { name: 'b' }]

        arr.forEach((user , i)=> {
           user.address = "dddd"
        })
        return (<div style={{ margin: '30px' }}>{x.name}</div>)
    }

    render() {

        return (
            <>
            <div>
                {this.state.users.map((user, index) => {
                    return (<div key={`${index}-user`} style={{ margin: '30px' }}>{user.name}</div>)
                })}
            </div>
            <div>
                <span>hello </span>
                {this.state.users.forEach((user) => {
                    return (<div  style={{ margin: '30px' }}>{user.name}</div>)
                })}
            </div>
            </>
           
        )

    }
}