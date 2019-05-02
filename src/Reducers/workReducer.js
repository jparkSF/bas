import {
  RECEIVE_ALL_WORKS
} from '../Actions/actions';

const WorkReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ALL_WORKS:
      return action.works
      
    default:
      return [];
  }
};

export default WorkReducer;