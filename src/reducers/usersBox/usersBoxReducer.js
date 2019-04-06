export const SAMPLE_ACTION = 'topNavBar/SAMPLE_ACTION';

const initialState = {
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