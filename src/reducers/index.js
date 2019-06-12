import {combineReducers} from 'redux';
import Works from './works';
import EditWork from './editWork';

let myReducers  = combineReducers({
    Works,
    EditWork
});

export default myReducers;