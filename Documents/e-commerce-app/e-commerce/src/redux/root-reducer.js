// representa todo el estado de nuestra app
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});
