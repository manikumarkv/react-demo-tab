import store from "./store"

export function updateUsers (users) {
    return {
        type: 'UPADTE_USERS',
        users: users
    }
}

export function updateSelectedUser (user) {
    return {
        type:'UPDATE_SELECTED_USER',
        user: user
    }
}
export function clearStore () {
    return {
        type:'CLEAR_ALL',
    }
}