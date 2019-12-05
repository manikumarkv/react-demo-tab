import React from 'react'
export const hocMethod = (Component, color) => (props) => {
    let styles = null

    switch (color) {
        case 'primary':
            styles = { color: 'green' }
            break;
        case 'warning':
            styles = { color: 'yellow' }
            break;
        case 'danger':
            styles = { color: 'red' }
            break;

        default:
            break;
    }

    return <Component style={styles} {...props}></Component>
}