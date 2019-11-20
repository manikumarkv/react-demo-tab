import React from 'react'
import propTypes from 'prop-types'
// import mani from 'mani'

 function AppHeader({ title, children }) {
    return (
        <div>
            <h1>this is app header - {title} </h1>
            {children}

        </div>
    )
}
// AppHeader.defaultProps = {
//     person: {
//         name: 'default name',
//         age: '232323'
//     }
// }
AppHeader.propTypes={
    title: propTypes.string.isRequired
}

export default AppHeader