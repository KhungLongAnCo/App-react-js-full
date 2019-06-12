import {combineReducers} from 'redux';
import Works from './works';
import EditWork from './editWork';
import WorkCompleted from './workCompleted';

let myReducers  = combineReducers({
    Works,
    EditWork,
    WorkCompleted
});

export default myReducers;