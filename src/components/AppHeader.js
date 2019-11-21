import React from 'react'
import propTypes from 'prop-types'
// import { connect } from 'http2'
// import mani from 'mani'

 function AppHeader({ title, children }) {
    return (
        <div>
            <h1>this is app header - {title} - </h1>
            {children}

        </div>
    )
}

// connect({
//     Availableusers: store.users
// })

export default AppHeader