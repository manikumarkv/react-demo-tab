import React, { useState, useEffect } from 'react';

export default function SuperAdminPage() {
    const [firstName, updateName] = useState('demo')
    const [modify, updateModify] = useState(true)
    // let isChanged = true

    console.log('super admin component')

    function changeName() {
        updateName('something else')
        updateModify(!modify)
    }
    useEffect(() => {
        console.log('component did mount/ component did update')
        // Update the document title using the browser API
        document.title = `You clicked ${firstName} times`;
    }, [modify]);


    return (
        <div>this is super admin page - {firstName}
            <button onClick={changeName}>change name </button>
            {modify.toString()}
        </div>)
}