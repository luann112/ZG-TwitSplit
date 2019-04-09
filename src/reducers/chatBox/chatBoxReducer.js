export const SEND_MESSAGE = 'chatBox/SEND_MESSAGE';
export const SEND_MESSAGE_ERROR = 'chatBox/SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_SUCCESS = 'chatBox/SEND_MESSAGE_SUCCESS';
export const NEW_MESSAGE = 'chatBox/NEW_MESSAGE';


const initialState = {
  chatData: {},
  error: null,
};

// action creator

const sendMessage = (connectionId, message) => ({ type: SEND_MESSAGE, connectionId, message });

export const actions = {
  sendMessage
}

const chatBoxReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SEND_MESSAGE:
      newState.error = null;
      return newState;
    case SEND_MESSAGE_ERROR:
      newState.error = action.error;
      return newState;
    case NEW_MESSAGE:
    case SEND_MESSAGE_SUCCESS: {
      const { connection, owner, message } = action.payload;
      newState.error = null;
      const newChatData = {
        ...state.chatData,
        [connection]: [
          ...(state.chatData[connection] || []),
          {
            owner,
            message
          }
        ]
      }
      newState.chatData = newChatData;
      return newState;
    }

    default:
      return state;
  }
};

export default chatBoxReducer;
