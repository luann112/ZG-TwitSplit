export const SAMPLE_ACTION = 'chatBox/SAMPLE_ACTION';
export const SEND_MESSAGE = 'chatBox/SEND_MESSAGE';

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
  chatData: initialChatData
};

// action creator

const sampleAction = () => ({ type: SAMPLE_ACTION });
const sendMessage = (connectionId, message) => ({ type: SEND_MESSAGE, connectionId, message });

export const actions = {
  sampleAction,
  sendMessage
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
