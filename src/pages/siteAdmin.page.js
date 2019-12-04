import React from 'react';
import { useLocation } from 'react-router-dom'

function useQuery() {
    const query = new URLSearchParams(useLocation().search);
    debugger;
    return query
}

export default function SiteAdminPage() {
    let query = useQuery();

    const name = query.get('name')
    debugger
    return <div>this is site admin page -{name}</div>

}