
import * as Types from '../constants/actionTypes';
import shortid from 'shortid';

let works = JSON.parse(localStorage.getItem('works'));
let initialState = works ? works : [];

let myReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_NEW_WORK:
            let newWork = {
                id: shortid.generate(),
                name: action.work.name,
                note: action.work.note,
                status: action.work.status
            }
            state.push(newWork);
            localStorage.setItem('works', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}
export default myReducers;