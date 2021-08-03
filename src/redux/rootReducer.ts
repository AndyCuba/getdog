import { combineReducers } from 'redux';
import { clientDataReducer } from './reducers/clientDataReducer/clientDataReducer';


const rootReducer = combineReducers({
    clientData: clientDataReducer
});

export default rootReducer;