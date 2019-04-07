export const SEND_MESSAGE = 'chatBox/SEND_MESSAGE';
export const SEND_MESSAGE_ERROR = 'chatBox/SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_SUCCESS = 'chatBox/SEND_MESSAGE_SUCCESS';

const initialChatData = {
  'broadcast': [
    {
      connectionId: 'broadcast',
      message: 'This is message 1',
    },
    {
      connectionId: 'broadcast',
      message: 'This is message 2 This is message 2 This is message 2 This is message 2 This is message 2',
    },
    {
      connectionId: 'user1',
      message: 'hello xin chao how are you?'
    },
    {
      connectionId: 'broadcast',
      message: 'This is message 3 dfsdf sfsdfs dsf shfh d dfgs fgs',
    },
    {
      connectionId: 'broadcast',
      message: 'This is message 1 sfkjbslf,ndsf s;fl s;fml sdfl snf sdlf',
    },
    {
      connectionId: 'user1',
      message: 'hello xin chao how are you? thanks you'
    },
  ]
}

const initialState = {
  chatData: initialChatData,
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

    default:
      return state;
  }
};

export default chatBoxReducer;
