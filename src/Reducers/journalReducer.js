import {
  RECEIVE_ALL_JOURNALS
} from '../Actions/actions';

const JournalReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_JOURNALS:
      return action.journals

    default:
      return [];
  }
};

export default JournalReducer;