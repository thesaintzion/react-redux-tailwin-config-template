import { createStore } from 'redux'

const initialState = {
    posts: [],
    users: [],
    signUpModal: {
      open: false
    },
    loggedIn: false
}

const  reducer = (state = initialState, action) => {
if (action.type === 'ADD_POST') {
    return Object.assign({}, state, {
        posts: state.posts.concat(action.payload)
      })
}

if (action.type === 'LOAD_POSTS') {
  return {
    ...state,
    posts: state.posts.concat(action.payload)
  }
}

if (action.type === 'LOAD_USERS') {
  return {
    ...state,
    users: state.users.concat(action.payload)
  }
}

return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;