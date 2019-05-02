import {combineReducers } from 'redux';
import workReducer from './workReducer';
import journalReducer from './journalReducer';

const allReducers = combineReducers({
  works: workReducer,
  journals: journalReducer
})


export default allReducers;