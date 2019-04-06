export const INIT_USER = 'auth/INIT_USER';


const initialState = {
  userId: null,
  userName: null,
};

// action creator

const initUser = (userId, userName) => ({ type: INIT_USER, userId, userName });

export const actions = {
  initUser,
}

const usersBoxReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case INIT_USER: {
      const { userId, userName } = action;
      newState.userId = userId;
      newState.userName = userName;
      return newState;
    }
      
    default:
      return state;
  }
};

export default usersBoxReducer;