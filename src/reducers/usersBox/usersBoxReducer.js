export const SAMPLE_ACTION = 'usersBox/SAMPLE_ACTION';
export const SELECT_CONNECTION = 'usersBox/SELECT_CONNECTION';
export const UPDATE_USER = 'usersBox/UPDATE_USER';
export const TOGGLE_USER_TAB = 'usersBox/TOGGLE_USER_TAB';


const initialState = {
  usersData: {},
  selectedConnectionId: 'broadcast',
  selectedConnectionName: 'Broadcast',
  isShowUsersTab: false,
};

// action creator

const selectConnection = (id, name) => ({ type: SELECT_CONNECTION, id, name });
const updateUser = (userData) => ({ type: UPDATE_USER, userData });
const toggleUsersTab = () => ({ type: TOGGLE_USER_TAB });

export const actions = {
  selectConnection,
  updateUser,
  toggleUsersTab,
}

const usersBoxReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SELECT_CONNECTION:
      newState.selectedConnectionId = action.id;
      newState.selectedConnectionName = action.name;
      return newState;

    case UPDATE_USER: {
      const { userData } = action;
      newState.usersData = {
        ...state.usersData,
        [userData.id]: userData
      }
      return newState;
    }

    case TOGGLE_USER_TAB: 
      newState.isShowUsersTab = !state.isShowUsersTab;
    return newState;
      

    default:
      return state;
  }
};

export default usersBoxReducer;