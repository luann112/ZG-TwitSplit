export const SAMPLE_ACTION = 'usersBox/SAMPLE_ACTION';
export const SELECT_CHANNEL = 'usersBox/SELECT_CHANNEL';
export const UPDATE_USER = 'usersBox/UPDATE_USER';


const initialState = {
  usersData: {},
  selectedChannel: 'broadcast',
};

// action creator

const selectChannel = (id) => ({ type: SELECT_CHANNEL, id });
const updateUser = (userData) => ({ type: UPDATE_USER, userData });

export const actions = {
  selectChannel,
  updateUser,
}

const chatBoxReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SELECT_CHANNEL:
      newState.selectedChannel = action.id;
      return newState;

    case UPDATE_USER: {
      const { userData } = action;
      newState.usersData = {
        ...state.usersData,
        [userData.id]: userData
      }
      return newState;
    }
      

    default:
      return state;
  }
};

export default chatBoxReducer;