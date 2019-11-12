import { ADD_USER, GET_USERS } from '../actions/actionsUsers';

const usersArray = [
  {
    id: 1,
    name: "Bebe",
    role: "admin"
  },
  {
    id: 2,
    name: "Lola",
    role: "user"
  }
]

const initialState = {
  users: usersArray,
};

const usersReducer = (state=initialState, action) => {
  switch(action.type) {
      case ADD_USER:        
          return {...state, users:[...state.users, action.newUser]}           
      case GET_USERS:
          return Object.assign({}, state, {users: state.users});
      default:
          return state;
  }
};

export default usersReducer;