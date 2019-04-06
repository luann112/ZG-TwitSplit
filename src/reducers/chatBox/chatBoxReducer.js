export const SAMPLE_ACTION = 'chatBox/SAMPLE_ACTION';
export const SEND_MESSAGE = 'chatBox/SEND_MESSAGE';

const initialChatData = {
  'broadcast': {}
}

const initialState = {
  chatData: initialChatData
};

// action creator

const sampleAction = () => ({ type: SAMPLE_ACTION });

export const actions = {
  sampleAction,
}

const chatBoxReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SAMPLE_ACTION:
      return newState;

    default:
      return state;
  }
};

export default chatBoxReducer;