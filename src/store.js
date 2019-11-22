import Redux, { createStore } from 'redux';
import Constants from './constants'

const defaultValues= {
    users:[{name:'name1'}, {name:'name2'}, {name:'name3'},{name:'name3'}],
    selectedUser: {}
}

function UserStore(userStore = defaultValues, action) {
    switch (action.type) {
        case Constants.UPADTE_USERS:
            return {...userStore, users: action.users}
            //return Object.assign(userStore, {users: action.users})            
            // break;
        case 'UPDATE_SELECTED_USER':
            return {...userStore, selectedUser: action.user}
            //return Object.assign(userStore, {selectedUser: action.user})
        case 'CLEAR_ALL':
            return Object.assign(userStore, {users:[], selectedUser: null})
    
        default:
            return userStore
    }


}

const store = createStore(UserStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store


//store.dispatch({type:'UPADTE_USERS', users:[]})