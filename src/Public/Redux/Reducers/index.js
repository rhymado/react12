import {combineReducers} from 'redux';

import github from './github';

const appReducer = combineReducers ({
  github,
});

export default appReducer;
